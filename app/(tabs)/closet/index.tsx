import { StyleSheet } from "react-native";
import React from "react";
import { Text, View } from "../../../components/Themed";
import { Link } from "expo-router";
import { useClosetStore } from "../../../store";
import { FlashList } from "@shopify/flash-list";

export default function ClosetLayout() {
  const garments = useClosetStore((state) => state.garments);

  console.log("garments", garments);
  return (
    <View style={styles.container}>
      <View style={{ height: "80%", width: "100%" }}>
        <FlashList
          data={garments}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Link
              href={{ pathname: `/closet/${item.id}`, params: { id: item.id } }}
            >
              <View style={styles.garmentCard}>
                <Text style={styles.garmentCardText}>{item.name}</Text>
                <Text style={styles.garmentCardText}>{item.garmentType}</Text>
                <Text style={styles.garmentCardText}>{item.color}</Text>
                <Text style={styles.garmentCardText}>{item.size}</Text>
                <Text style={styles.garmentCardText}>{item.material}</Text>
                <Text style={styles.garmentCardText}>{item.brand}</Text>
                <Text style={styles.garmentCardText}>{item.source}</Text>
              </View>
            </Link>
          )}
          estimatedItemSize={100}
        />
      </View>
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
