import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";
import { useFonts } from "expo-font";
import {
  GothicA1_400Regular,
  GothicA1_500Medium,
  GothicA1_600SemiBold,
  GothicA1_700Bold,
} from "@expo-google-fonts/gothic-a1";

export default function RootLayout() {
  const [fontLoaded] = useFonts({
    GothicA1_400Regular,
    GothicA1_500Medium,
    GothicA1_600SemiBold,
    GothicA1_700Bold,
  });

  if (!fontLoaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="(auth)" options={{ title: "" }} />
      <Stack.Screen
        name="index"
        options={{
          headerStyle: {
            backgroundColor: "purple",
          },
          title: "",
        }}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({});
