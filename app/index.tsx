import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Header } from "./components/header";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    //Tela de inicio
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Link href={"(tabs)/catalogo"}>Ir para Tabs (Tabs) </Link>
        <Link href={"(auth)/login"}>Ir para Logins (Auth) </Link>
        <Link href={"(create)/novoCliente"}>Ir para create (create) </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFE9E9",
  },

  content: {},
});
