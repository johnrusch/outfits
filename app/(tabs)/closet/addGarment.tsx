import React from "react";
import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { API, graphqlOperation, Storage, Auth } from "aws-amplify";
import { createGarment } from "../../../graphql/mutations";
import { GraphQLQuery } from "@aws-amplify/api";
import {
  CreateGarmentInput,
  CreateGarmentMutation,
  GarmentType,
} from "../../../API";
import { useClosetStore } from "../../../store";
import { useNavigation } from "expo-router";
import * as ImagePicker from "expo-image-picker";

const capitalCase = (text: string) => {
  const lower = text.toLowerCase();
  const formatted = lower.charAt(0).toUpperCase() + lower.slice(1);
  return formatted;
};

export default function AddGarment() {
  const [newGarment, setNewGarment] = React.useState<CreateGarmentInput>({
    name: "",
    garmentType: GarmentType.SHIRT,
    image: null,
    color: "",
    size: "",
    material: "",
    brand: "",
    source: "",
  });
  const [percentage, setPercentage] = React.useState(0);

  const handleNewGarmentChange = (key: string, value: string) => {
    setNewGarment((prevGarment) => ({ ...prevGarment, [key]: value }));
  };

  const fetchImageFromUri = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    return blob;
  };

  const uploadImage = (filename, img) => {
    Auth.currentCredentials();
    return Storage.put(filename, img, {
      level: "public",
      contentType: "image/jpeg",
      progressCallback(progress) {
        setLoading(progress);
      },
    })
      .then((response) => {
        return response.key;
      })
      .catch((error) => {
        console.log(error);
        return error.response;
      });
  };

  const downloadImage = (uri) => {
    Storage.get(uri)
      .then((result) => setImage(result))
      .catch((err) => console.log(err));
  };

  const setLoading = (progress) => {
    const calculated = parseInt((progress.loaded / progress.total) * 100);
    setPercentage(calculated); // due to s3 put function scoped
  };

  const handleImagePicked = async (pickerResult: string, fileName: string) => {
    console.log("the parametres: ", pickerResult, fileName);
    try {
      setPercentage(0);
      const img = await fetchImageFromUri(pickerResult);
      const uploadUrl = await uploadImage(fileName, img);
      return uploadUrl;
      //   downloadImage(uploadUrl);
    } catch (e) {
      console.log(e);
      alert("Upload failed");
    }
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      handleNewGarmentChange("image", result.assets[0].uri);
    }
  };

  const navigation = useNavigation();

  const handleSubmit = async (newGarment: CreateGarmentInput) => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      const imageKey = newGarment.image
        ? `${user.username}/${Date.now()}-${newGarment.name.replace(
            /\s/g,
            "-"
          )}`
        : null;
      if (imageKey) {
        const s3Key = await handleImagePicked(newGarment.image, imageKey);
        console.log("s3Key", s3Key);
        newGarment.image = s3Key;
      }
      console.log("newGarment", newGarment);
      useClosetStore.getState().addGarment(newGarment);
      setNewGarment({
        name: "",
        garmentType: GarmentType.SHIRT,
        image: null,
        color: "",
        size: "",
        material: "",
        brand: "",
        source: "",
      });
      // Navigate to '/closet' page after successfully adding a garment
      navigation.navigate("(tabs)", { screen: "closet/index" });
    } catch (error) {
      console.log("Error creating garment: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Add Garment Page</Text>
      {percentage !== 0 && <Text style={styles.percentage}>{percentage}%</Text>}
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Garment name"
          value={newGarment.name}
          onChangeText={(text) => handleNewGarmentChange("name", text)}
        />
        <Picker
          selectedValue={newGarment.garmentType}
          style={styles.input}
          onValueChange={(pick: GarmentType) =>
            handleNewGarmentChange("garmentType", pick)
          }
          placeholder="Garment type"
        >
          {Object.values(GarmentType).map((type) => (
            <Picker.Item key={type} label={capitalCase(type)} value={type} />
          ))}
        </Picker>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Button title="Pick an image from camera roll" onPress={pickImage} />
          {newGarment.image && (
            <Image
              source={{ uri: newGarment.image }}
              style={{ width: 200, height: 200 }}
            />
          )}
        </View>
        <TextInput
          style={styles.input}
          placeholder="Color"
          value={newGarment.color}
          onChangeText={(text) => handleNewGarmentChange("color", text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Size"
          value={newGarment.size}
          onChangeText={(text) => handleNewGarmentChange("size", text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Material"
          value={newGarment.material}
          onChangeText={(text) => handleNewGarmentChange("material", text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Brand"
          value={newGarment.brand}
          onChangeText={(text) => handleNewGarmentChange("brand", text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Source"
          value={newGarment.source}
          onChangeText={(text) => handleNewGarmentChange("source", text)}
        />
        <Button title="Add garment" onPress={() => handleSubmit(newGarment)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    overflow: "scroll",
    padding: 30,
  },
  form: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#fff",
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  percentage: {
    marginBottom: 10,
  },
});
