import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { useClosetStore } from "../../../store";
import { useLocalSearchParams } from "expo-router";
import { Storage } from "aws-amplify";
import { Image } from "expo-image";

const Garment = () => {
  const { id } = useLocalSearchParams();
  const [garment, setGarment] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchGarmentAndImage = async () => {
      const garment = useClosetStore.getState().getGarment(id);
      console.log("garment  ", garment);
      if (!garment) return;
      const image = await Storage.get(garment.image);
      // Update the garment object with the new image URL
      const updatedGarment = { ...garment, image };
      setGarment(updatedGarment);
      setIsLoaded(true);
    };
    fetchGarmentAndImage();
  }, [id]);

  if (!isLoaded) return null;
  console.log("garment", garment);
  return (
    <View
      style={{
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <Text>{garment.name}</Text>
      <Text>{garment.garmentType}</Text>
      <Image
        source={garment.image}
        style={{
          height: 100,
          width: 100,
          zIndex: 1000,
          borderColor: "green",
          borderWidth: 5,
        }}
      />
      <Text>{garment.color}</Text>
      <Text>{garment.size}</Text>
      <Text>{garment.material}</Text>
      <Text>{garment.brand}</Text>
      <Text>{garment.source}</Text>
    </View>
  );
};

export default Garment;
