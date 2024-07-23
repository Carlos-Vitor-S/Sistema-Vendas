import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Input from "../components/input";
import globalStyles from "../styles/globalStyles";
import { Ionicons } from "@expo/vector-icons";
//border radius
const borderRadiusNumber = 8;
const NovoPedido = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View>
          <Ionicons name="storefront-outline" size={24} color="black" />
          <Text> Novo Pedido</Text>
        </View>
        <View style={styles.content}>
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
        </View>
      </View>
    </ScrollView>
  );
};

export default NovoPedido;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
    padding: 12,

    borderRadius: borderRadiusNumber,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1.5 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 5,
    backgroundColor: globalStyles.fontColors.headerFontColor,
  },

  content: {
    flexDirection: "column",
  },
});
