/**
 * Renders the tab layout component.
 * This component displays a tab-based navigation system with different screens.
 * It includes tabs for "Closet", "Add New Garment", "Garment", "Outfits", "Add New Outfit",
 * "Add Garments to Outfit", and "Me".
 * Each tab has its own screen and options.
 */
import React, { useEffect } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";

import Colors from "../../constants/Colors";
import { Auth } from "aws-amplify";
import { useClosetStore } from "../../store";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  useEffect(() => {
    Auth.currentAuthenticatedUser().then((user) => {
      if (user) {
        useClosetStore.getState().fetchGarments();
        useClosetStore.getState().fetchOutfits();
      }
    });
  }, []);

  const colorScheme = useColorScheme();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
      }}
    >
      <Tabs.Screen
        name="closet/index"
        options={{
          title: "Closet",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="wardrobe-outline"
              size={28}
              color={color}
            />
          ),
          headerRight: () => (
            <Link href="/closet/addGarment" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="plus"
                    size={25}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="closet/addGarment"
        options={{
          title: "Add New Garment",
          href: null,
        }}
      />
      <Tabs.Screen
        name="closet/[garmentId]"
        options={{
          title: "Garment",
          href: null,
        }}
      />
      <Tabs.Screen
        name="outfits/index"
        options={{
          title: "Outfits",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="hanger" size={28} color={color} />
          ),
          headerRight: () => (
            <Link href="/outfits/addOutfit" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="plus"
                    size={25}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="outfits/addOutfit/index"
        options={{
          title: "Add New Outfit",
          href: null,
          headerRight: () => (
            <Link href="/outfits/addOutfit/addGarments" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="plus"
                    size={25}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="outfits/[outfitId]"
        options={{
          title: "Outfit",
          href: null,
        }}
      />
      <Tabs.Screen
        name="outfits/addOutfit/addGarments"
        options={{
          title: "Add Garments to Outfit",
          href: null,
        }}
      />
      <Tabs.Screen
        name="me"
        options={{
          title: "Me",
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}
