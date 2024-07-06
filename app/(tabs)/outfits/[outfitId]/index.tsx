import React, { useEffect, useState } from "react";
import { View, Text } from "../../../../components/Themed";
import { StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useClosetStore } from "../../../../store";
import GarmentList from "../../../../components/GarmentList";
import { Garment, Outfit } from "../../../../API";

export default function OutfitDetails() {
  const [outfit, setOutfit] = useState<Outfit | null>(null);
  const [garments, setGarments] = useState<Garment[]>([]); // Specify the type of garments as an array of Garment or undefined

  const { outfitId } = useLocalSearchParams();
  useEffect(() => {
    async function getOutfit() {
      if (!outfitId) return;
      const outfit = await useClosetStore
        .getState()
        .getOutfit(outfitId.toString()); // Convert outfitId to string
      if (!outfit) return;
      setOutfit(outfit);
      if (!outfit.garments) return;
      const items = outfit?.garments.items
        .map((item) => item?.garment)
        .filter((garment): garment is Garment => garment !== undefined); // Add null check for 'item'
      setGarments(items); // Provide a default value of an empty array when items is undefined
    }
    getOutfit();
  }, [outfitId]);

  return (
    <View style={styles.container}>
      <Text>{outfit?.name}</Text>
      {garments && <GarmentList garments={garments} outfitId={outfit?.id} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
