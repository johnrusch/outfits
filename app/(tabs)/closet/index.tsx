import { StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { Text, View } from "../../../components/Themed";
import { Link } from "expo-router";
import { useClosetStore } from "../../../store";
import { FlashList } from "@shopify/flash-list";
import GarmentList from "../../../components/GarmentList";
import ExpandableView from "../../../components/ExpandableView";

export default function ClosetLayout() {
  const garments = useClosetStore((state) => state.garments);
  const [organizedGarments, setOrganizedGarments] = useState({});

  useEffect(() => {
    if (!garments) return;
    const sortedGarments = garments.reduce((acc, garment) => {
      const garmentType = garment.garmentType;
      if (!acc[garmentType]) {
        acc[garmentType] = [];
      }
      acc[garmentType].push(garment);
      return acc;
    }, {});
    setOrganizedGarments(sortedGarments);
  }, [garments]);

  return (
    <View style={styles.container}>
      {Object.keys(organizedGarments).map((key) => (
        <ExpandableView key={key} title={key}>
          <GarmentList garments={organizedGarments[key]} />
        </ExpandableView>
      ))}
      <Link href="/closet/addGarment">
        <Text style={styles.link}>Add new garment</Text>
      </Link>
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
