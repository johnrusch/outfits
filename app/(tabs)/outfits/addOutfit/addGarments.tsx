import { StyleSheet, Button } from "react-native";
import React, { useState } from "react";
import { Text, View } from "../../../../components/Themed";
import { useClosetStore } from "../../../../store";
import { FlashList } from "@shopify/flash-list";
import Checkbox from "expo-checkbox";
import { Link, useNavigation, useLocalSearchParams } from "expo-router";

export default function AddGarments() {
  const garments = useClosetStore((state) =>
    state.garments.filter(
      (garment) => !state.pickedGarments.some((pg) => pg.id === garment.id)
    )
  );
//   const garments = allGarments.filter(
//     (garment) => !pickedGarments.includes(garment)
//   );
  const [selectedGarmentIds, setSelectedGarmentIds] = useState([]);
  const params = useLocalSearchParams();


  const navigation = useNavigation();

  const handleGarmentSelection = (garmentId) => {
    if (selectedGarmentIds.includes(garmentId)) {
      setSelectedGarmentIds(
        selectedGarmentIds.filter((id) => id !== garmentId)
      );
    } else {
      setSelectedGarmentIds([...selectedGarmentIds, garmentId]);
    }
  };

  const onConfirm = () => {
    const selectedGarments = garments.filter((garment) =>
      selectedGarmentIds.includes(garment.id)
    );
    useClosetStore.getState().pickGarments(selectedGarments);
    setSelectedGarmentIds([]);
    navigation.navigate("(tabs)", {
      screen: "outfits/addOutfit/index",
    });
  };


  return (
    <View style={styles.container}>
      <View style={{ height: "80%", width: "100%" }}>
        <FlashList
          data={garments}
          extraData={selectedGarmentIds}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.garmentCard}>
              <Text style={styles.garmentCardText}>{item.name}</Text>
              <Text style={styles.garmentCardText}>{item.garmentType}</Text>
              <Text style={styles.garmentCardText}>{item.color}</Text>
              <Text style={styles.garmentCardText}>{item.size}</Text>
              <Text style={styles.garmentCardText}>{item.material}</Text>
              <Text style={styles.garmentCardText}>{item.brand}</Text>
              <Text style={styles.garmentCardText}>{item.source}</Text>
              <Checkbox
                value={selectedGarmentIds.includes(item.id)}
                onValueChange={() => handleGarmentSelection(item.id)}
              />
            </View>
          )}
          estimatedItemSize={100}
        />
      </View>
      <View style={{ margin: 10 }}>
        <Button
          title="Add selected garments to outfit"
          disabled={selectedGarmentIds.length === 0}
          onPress={() => onConfirm()}
        />
      </View>
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
    flexDirection: "row",
    justifyContent: "space-between",
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
