import React from "react";
import { Text, View } from "./Themed";
import { Pressable, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { Garment } from "../API";
import { Image } from "expo-image";

interface GarmentCardProps {
  garment: Garment;
}

export const GarmentCard = ({ garment }: GarmentCardProps) => {
  const garmentType = garment.garmentType || "";
  return (
    <Link
      asChild
      push
      href={{
        pathname: `/closet/${garment.id}`,
        params: { id: garment.id, type: garmentType },
      }}
      testID="garmentCard"
    >
      <Pressable>
        <View style={styles.garmentCard}>
          <View style={styles.garmentThumbnailSection}>
            <Image
              source={garment.image}
              style={{
                height: 100,
                width: 100,
                zIndex: 1000,
              }}
            />
          </View>
          <View style={styles.garmentNameSection}>
            <Text style={styles.garmentCardText}>{garment.name}</Text>
          </View>
        </View>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "space-between",
    // overflow: "scroll",
    // width: "100%",
    borderWidth: 1,
    borderColor: "red",
    margin: 10,
    borderRadius: 10,
  },
  garmentCard: {
    flex: 1,
    margin: 10,
    backgroundColor: "#adc178",
    justifyContent: "space-around",
    padding: 5,
    flexDirection: "row",
    borderRadius: 10,
  },
  garmentThumbnailSection: {
    flexDirection: "column",
    justifyContent: "center",
    padding: 10,
    borderRadius: 10,
  },
  garmentNameSection: {
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center",
    padding: 10,
    backgroundColor: "#adc178",
  },
  garmentTextSection: {
    flexDirection: "column",
    justifyContent: "center",
    padding: 10,
    borderRadius: 10,
  },
  garmentCardText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  title: {
    fontSize: 25,
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
