import React from "react";
import { FlashList } from "@shopify/flash-list";
import GarmentCard from "./GarmentCard";
import { View } from "./Themed";
import { Garment } from "../API";

interface GarmentListProps {
  garments: Array<Garment>;
  outfitId?: string;
}

const GarmentList = ({ garments }: GarmentListProps) => {
  return (
    <View style={{ width: "100%", flexGrow: 1 }} testID="garmentList">
      <FlashList
        data={garments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <GarmentCard garment={item} />}
        estimatedItemSize={100}
      />
    </View>
  );
};

export default GarmentList;
