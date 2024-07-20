import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import globalStyles from "../styles/globalStyles";
import { GothicA1_600SemiBold } from "@expo-google-fonts/gothic-a1";
import { Ionicons } from "@expo/vector-icons";
import { PixelRatio } from "react-native";
//Card interface
type cardProps = {
  cod: number;
  title: string;
  subtitle: string;
  address: string;
};
//Responsividade das Fontes
const fontScale = PixelRatio.getFontScale();
const getFontSize = (size: number) => size / fontScale;

//border radius
const borderRadiusNumber = 9;

//Props do card usando a interface card
const Card: React.FC<cardProps> = ({ cod, title, subtitle, address }) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.codContainer}>
            <Text style={styles.codText}>Cod {cod}</Text>
          </View>
          <View style={styles.cardDescription}>
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.cardSubtitle}>{subtitle}</Text>
            <View style={styles.cardAddressContainer}>
              <Ionicons
                name="location-outline"
                size={15}
                color={globalStyles.fontColors.darkFontColor}
              />
              <Text style={styles.cardAddress}>{address}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  //Card container
  container: {
    flex: 1,
    flexDirection: "column",
    alignContent: "flex-start",
    justifyContent: "flex-start",

    margin: 10,
    marginBottom: 0,

    borderRadius: borderRadiusNumber,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1.5 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 5,
    backgroundColor: globalStyles.fontColors.headerFontColor,
  },

  content: {
    position: "relative",
  },
  //container do codigo
  codContainer: {
    padding: 8,
    position: "absolute",
    borderTopRightRadius: borderRadiusNumber,
    borderBottomLeftRadius: borderRadiusNumber,
    backgroundColor: globalStyles.colors.primaryColorLighter,
    right: 0,
  },

  //container das informações gerais do card
  cardDescription: {
    padding: 15,
    marginBottom: 5,
  },

  //Texto cod do card
  codText: {
    fontSize: getFontSize(12),
    fontFamily: "GothicA1_600SemiBold",
    color: globalStyles.fontColors.headerFontColor,
  },
  //Texto titulo do card
  cardTitle: {
    fontFamily: "GothicA1_700Bold",
    color: globalStyles.fontColors.darkFontColor,
    fontSize: getFontSize(17),
    marginTop: 2,
  },
  //Texto subtitulo do card
  cardSubtitle: {
    fontFamily: "GothicA1_500Medium",
    color: globalStyles.fontColors.lighterFontColor,
    marginTop: 5,
    fontSize: getFontSize(14),
  },
  //container do endereço do card
  cardAddressContainer: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 0,
    marginTop: 7,
  },
  //Texto do endereço
  cardAddress: {
    fontFamily: "GothicA1_500Medium",
    color: globalStyles.fontColors.lighterFontColor,
    paddingTop: 1,
    fontSize: getFontSize(11),
  },
});
