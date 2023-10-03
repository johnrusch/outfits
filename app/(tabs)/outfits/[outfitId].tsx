import React, { useEffect, useState } from "react";
import { Text, View } from "../../../components/Themed";
import { StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useClosetStore } from "../../../store";
import GarmentList from "../../../components/GarmentList";

export default function OutfitDetails() {
  const [outfit, setOutfit] = useState(null);
  const [garments, setGarments] = useState([]);
  const { outfitId } = useLocalSearchParams();
  console.log("outfitId", outfitId);
  useEffect(() => {
    async function getOutfit() {
      const outfit = await useClosetStore.getState().getOutfit(outfitId);
      if (!outfit) return;
      setOutfit(outfit);
      const items = outfit?.garments.items.map((item) => item.garment);
      setGarments(items);
    }
    getOutfit();
  }, [outfitId]);
  console.log("outfit", garments);
  return (
    <View style={styles.container}>
      <GarmentList garments={garments} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});

