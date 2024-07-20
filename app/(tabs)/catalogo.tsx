import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { GothicA1_700Bold } from "@expo-google-fonts/gothic-a1";
import { Header } from "../components/header";
import globalStyles from "../styles/globalStyles";

const Catalogo = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
          illum vel consequatur placeat voluptatum! Fugiat quis accusantium
          voluptas quae provident quidem nemo, aliquam officiis quo, aspernatur
          placeat voluptatibus molestias perspiciatis!
        </Text>
      </View>
    </ScrollView>
  );
};

export default Catalogo;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    fontFamily: "GothicA1_400Regular",
    backgroundColor: globalStyles.colors.inputColor,
  },
  content: {
    flex: 1,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "white",
  },
});
