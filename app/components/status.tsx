import { Image, PixelRatio, StyleSheet, Text, View } from "react-native";

import React from "react";
import globalStyles from "../styles/globalStyles";
import { useWindowDimensions } from "react-native";
//Responsividade das Fontes
const fontScale = PixelRatio.getFontScale();
const getFontSize = (size: number) => size / fontScale;

const Status = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/confirmStatus.png")}
          style={{ width: 50, height: 50 }}
        />
        <Text style={styles.statusText}>Finalizado</Text>
      </View>

      <View style={styles.separator}></View>

      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/pendingStatus.png")}
          style={{ width: 50, height: 50 }}
        />
        <Text style={styles.statusText}>Andamento</Text>
      </View>

      <View style={styles.separator}></View>

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
    justifyContent: "space-around",

    padding: 10,
    borderRadius: 8,
    backgroundColor: globalStyles.fontColors.headerFontColor,
    marginBottom: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1.5 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },

  imageContainer: {
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginLeft: 10,
    marginRight: 10,
  },

  statusText: {
    fontFamily: "GothicA1_500Medium",
    color: globalStyles.fontColors.lighterFontColor,
    fontSize: getFontSize(12),
    padding: 2,
    marginTop: 4,
  },

  separator: {
    height: "100%",
    borderRightWidth: 1,
    marginHorizontal: 10,
    borderRightColor: globalStyles.colors.separatorColor,
  },
});
