import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export function Header() {
  return (
    <View style={styles.headerContainer}>
      <SafeAreaView>
        <Text>Title</Text>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    backgroundColor: "blue",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
