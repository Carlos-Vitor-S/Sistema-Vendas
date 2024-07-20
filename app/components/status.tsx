import { Image, StyleSheet, Text, View } from "react-native";

import React from "react";
import globalStyles from "../styles/globalStyles";
import { useWindowDimensions } from "react-native";
const Status = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/pendingStatus.png")}
          style={{ width: 50, height: 50 }}
        />
        <Text style={styles.statusText}>Andamento</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/confirmStatus.png")}
          style={{ width: 50, height: 50 }}
        />
        <Text style={styles.statusText}>Finalizado</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/cancelStatus.png")}
          style={{ width: 50, height: 50 }}
        />
        <Text style={styles.statusText}>Cancelado</Text>
      </View>
    </View>
  );
};

export default Status;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1.5 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 5,
    padding: 10,
    borderRadius: 8,
    backgroundColor: globalStyles.fontColors.headerFontColor,
    marginLeft: 10,
    marginTop: 10,
    marginRight: 10,
  },

  imageContainer: {
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginLeft: 10,
    marginRight: 10,
    borderRightColor: "red",
  },

  statusText: {
    padding: 2,
    marginTop: 5,
    fontFamily: "GothicA1_500Medium",
    color: globalStyles.fontColors.lighterFontColor,
  },
});
