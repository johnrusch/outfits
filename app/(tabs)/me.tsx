import { StyleSheet, Button } from "react-native";
import React from "react";
import { useAuthenticator } from "@aws-amplify/ui-react-native";
import { Text, View } from "../../components/Themed";

const SignOutButton = () => {
  const { signOut } = useAuthenticator();
  return <Button title="Sign Out" onPress={signOut} />;
}

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Me</Text>
      <SignOutButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
});
