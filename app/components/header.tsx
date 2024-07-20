import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export function Header() {
  return (
    <SafeAreaView>
      <View>
        <Text>Title</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    backgroundColor: "blue",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
