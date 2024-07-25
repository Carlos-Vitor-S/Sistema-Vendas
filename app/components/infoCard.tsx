import { PixelRatio, StyleSheet, Text, View } from "react-native";
import React from "react";
import globalStyles from "../styles/globalStyles";
import { GothicA1_500Medium } from "@expo-google-fonts/gothic-a1";

//Responsividade das Fontes
const fontScale = PixelRatio.getFontScale();
const getFontSize = (size: number) => size / fontScale;

const InfoCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.cardContent}>
          <Text style={styles.cardText}>
            <Text style={styles.cardTextBold}>Total Faturado:</Text> R$ 1000,00
          </Text>
          <View style={styles.separator}></View>
          <Text style={styles.cardText}>
            <Text style={styles.cardTextBold}>Total Faturado:</Text> R$ 1000,00
          </Text>
          <View style={styles.separator}></View>
          <Text style={styles.cardText}>
            <Text style={styles.cardTextBold}>Total Faturado:</Text> R$ 1000,00
          </Text>
        </View>
      </View>
    </View>
  );
};

export default InfoCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: globalStyles.colors.primaryColor,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1.5 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 5,
  },

  cardContainer: {
    width: "100%",

    alignItems: "center",
    position: "relative",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1.5 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 5,
    padding: 20,
  },

  cardContent: {
    position: "absolute",
    width: "100%",
    padding: 12,
    //top: 25,
    top: "50%",

    backgroundColor: "white",
    justifyContent: "flex-start",
    borderRadius: 8,
  },

  cardTextBold: {
    fontSize: getFontSize(14),
    fontFamily: "GothicA1_600SemiBold",
    color: globalStyles.fontColors.darkFontColor,
  },

  cardText: {
    fontSize: getFontSize(14),
    fontFamily: "GothicA1_500Medium",
    color: globalStyles.fontColors.lighterFontColor,
    padding: 5,
  },

  separator: {
    height: 1,
    backgroundColor: globalStyles.colors.separatorColor,
    margin: 5,
  },
});
