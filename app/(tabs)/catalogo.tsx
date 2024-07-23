import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { GothicA1_700Bold } from "@expo-google-fonts/gothic-a1";
import { Header } from "../components/header";
import globalStyles from "../styles/globalStyles";
import ImageCard from "../components/imageCard";

const Catalogo = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageCard />
      </View>
    </ScrollView>
  );
};

export default Catalogo;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});
