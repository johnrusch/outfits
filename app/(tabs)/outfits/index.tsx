import { StyleSheet } from "react-native";
import React from "react";
import { Text, View } from "../../../components/Themed";
import { Link } from "expo-router";
import { useClosetStore } from "../../../store";
import { FlashList } from "@shopify/flash-list";

export default function OutfitLayout() {
  const outfits = useClosetStore((state) => state.outfits);

  return (
    <View style={styles.container}>
      <View style={{ height: "80%", width: "100%" }}>
        <FlashList
          data={outfits}
          renderItem={({ item }) => (
            <Link
              key={item.id}
              href={{ pathname: `/outfits/${item.id}`, params: { item: item } }}
            >
              <View style={styles.outfitCard}>
                <Text style={styles.outfitCardText}>{item.name}</Text>
                <Text style={styles.outfitCardText}>{new Date(item?.createdAt).toDateString()}</Text>
              </View>
            </Link>
          )}
          estimatedItemSize={100}
        />
      </View>
      <Link href="/outfits/addOutfit">
        <Text style={styles.link}>Add new outfit</Text>
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
  outfitCard: {
    backgroundColor: "gray",
    borderRadius: 10,
    border: "1px solid white",
    padding: 10,
    margin: 5,
    width: "80%",
  },
  outfitCardText: {
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
