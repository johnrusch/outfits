import React from "react";
import { Text, View } from "../../../../components/Themed";
import { Link, useLocalSearchParams, useNavigation } from "expo-router";
import { FlashList } from "@shopify/flash-list";
import { StyleSheet, Button, TextInput, Pressable } from "react-native";
import { useClosetStore } from "../../../../store";
import { FontAwesome } from "@expo/vector-icons";

export default function addOutfit() {
  const [outfit, setOutfit] = React.useState({});
  const [garments, setGarments] = React.useState([]);
  const navigation = useNavigation();
  const pickedGarments = useClosetStore((state) => state.pickedGarments);
  console.log("pickedGarments", pickedGarments);

  const createOutfit = async () => {
    // set the garments on the outfit
    outfit.garments = pickedGarments;
    // make a call to the closet store to create the outfit
    try {
      await useClosetStore.getState().addOutfit(outfit);
      // clear the picked garments
      useClosetStore.getState().clearPickedGarments();
      setOutfit({});
      navigation.navigate("(tabs)", { screen: "outfits/index" });
    } catch (error) {
      console.log("error", error);
    }
    // navigate to the main outfits page
  };

  // React.useEffect(() => {
  //   if (!selectedGarments || !Array.isArray(selectedGarments)) return;
  //   setGarments((prevGarments) => [...prevGarments, ...selectedGarments]);
  // }, [selectedGarments]);

  console.log("garments", garments);
  return (
    <View style={styles.container}>
      <View style={{ height: "80%", width: "100%" }}>
        <Text style={styles.garmentsTitle}>Garments:</Text>
        <FlashList
          data={pickedGarments}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={{ flexDirection: "row", flex: 1 }}>
              <Link
                href={{
                  pathname: `/closet/${item.id}`,
                  params: { id: item.id },
                }}
              >
                <View style={styles.garmentCard}>
                  <Text style={styles.garmentCardText}>{item.name}</Text>
                  <Text style={styles.garmentCardText}>{item.garmentType}</Text>
                  <Text style={styles.garmentCardText}>{item.color}</Text>
                  <Text style={styles.garmentCardText}>{item.size}</Text>
                  <Text style={styles.garmentCardText}>{item.material}</Text>
                  <Text style={styles.garmentCardText}>{item.brand}</Text>
                  <Text style={styles.garmentCardText}>{item.source}</Text>
                  <Pressable>
                    <FontAwesome
                      name="remove"
                      size={24}
                      color="black"
                      onPress={() =>
                        useClosetStore.getState().removePickedGarment(item)
                      }
                    />
                  </Pressable>
                </View>
              </Link>
              {/* <Button
                title="Remove"
                onPress={() =>
                  useClosetStore.getState().removePickedGarment(item.id)
                }
                style={styles.removeGarmentButton}
              /> */}
            </View>
          )}
          estimatedItemSize={100}
        />
      </View>
      <View style={{ margin: 10 }}>
        <Text style={styles.outfitNameTitle}>Outfit Name:</Text>
        <TextInput
          style={styles.outfitNameInput}
          onChangeText={(text) => setOutfit({ ...outfit, name: text })}
          value={outfit.name}
        />
        <Button title="Create New Outfit" onPress={() => createOutfit()} />
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
  },
  garmentCard: {
    backgroundColor: "gray",
    borderRadius: 10,
    border: "1px solid white",
    padding: 10,
    margin: 5,
    width: "80%",
  },
  garmentCardText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  garmentsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  outfitNameTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  outfitNameInput: {
    height: 40,
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    backgroundColor: "white",
  },
  removeGarmentButton: {
    backgroundColor: "red",
    color: "white",
    borderRadius: 10,
    border: "1px solid white",
    padding: 10,
    margin: 5,
    width: "20%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
  },
});
