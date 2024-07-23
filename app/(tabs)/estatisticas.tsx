import { View, Text, StyleSheet } from "react-native";
import React from "react";
import globalStyles from "../styles/globalStyles";
import TopTabsLayout from "../(create)/_layout";

const Estatisticas = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Maior Venda: </Text>
        <Text>Maior Venda: </Text>
        <Text>Maior Venda: </Text>
      </View>
    </View>
  );
};

export default Estatisticas;

const styles = StyleSheet.create({
  container: {
    backgroundColor: globalStyles.colors.primaryColorLight,
    //borderTopWidth: 2,
    borderColor: globalStyles.colors.separatorColorDark,
    padding: 12,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
});
