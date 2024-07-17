import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";

export default function RootLayout() {
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
