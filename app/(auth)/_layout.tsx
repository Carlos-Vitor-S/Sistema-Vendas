import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="signUp" />
    </Stack>
  );
};

export default AuthLayout;
