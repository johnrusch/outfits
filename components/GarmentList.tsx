import React from "react";
import { FlashList } from "@shopify/flash-list";
import GarmentCard from "./GarmentCard";
import { Text, View } from "./Themed";
import { Link } from "expo-router";
import { StyleSheet } from "react-native";

interface GarmentListProps {
  garments: Array<{
    id: string;
    name: string;
    brand: string;
    color: string;
    size: string;
  }>;
}

const GarmentList = ({ garments }: GarmentListProps) => {
  return (
    <View style={{ height: "80%", width: "100%" }}>
      <FlashList
        data={garments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <GarmentCard garment={item}/>
        )}
        estimatedItemSize={100}
      />
    </View>
  );
};

export default GarmentList;
