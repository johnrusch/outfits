import React from "react";
import { Text, View } from "./Themed";
import { StyleSheet } from "react-native";
import { Link } from "expo-router";

interface GarmentCardProps {
  garment: {
    id: string;
    name: string;
    garmentType: string;
    brand: string;
    color: string;
    size: string;
    material: string;
    source: string;
  };
}

export const GarmentCard = ({ garment }: GarmentCardProps) => {
  return (
    <Link href={{ pathname: `/closet/${garment.id}`, params: { id: garment.id, type: garment.garmentType } }}>
      <View style={styles.garmentCard}>
        <Text style={styles.garmentCardText}>{garment.name}</Text>
        <Text style={styles.garmentCardText}>{garment.garmentType}</Text>
        <Text style={styles.garmentCardText}>{garment.color}</Text>
        <Text style={styles.garmentCardText}>{garment.size}</Text>
        <Text style={styles.garmentCardText}>{garment.material}</Text>
        <Text style={styles.garmentCardText}>{garment.brand}</Text>
        <Text style={styles.garmentCardText}>{garment.source}</Text>
      </View>
    </Link>
  );
};

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

export default GarmentCard;
