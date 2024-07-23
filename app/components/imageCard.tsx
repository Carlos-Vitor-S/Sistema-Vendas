import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  PixelRatio,
} from "react-native";
import React from "react";
import globalStyles from "../styles/globalStyles";
import { Ionicons } from "@expo/vector-icons";
//Responsividade das Fontes
const fontScale = PixelRatio.getFontScale();
const getFontSize = (size: number) => size / fontScale;

//border radius
const borderRadiusNumber = 8;
const ImageCard = () => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.codContainer}>
          <Text style={styles.codText}>Cod 001</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/panelaExample.jpg")}
            style={{
              width: 70,
              height: 70,
              borderRadius: 10,
            }}
          />
        </View>
        <View style={styles.content}>
          <View style={styles.cardDescription}>
            <Text style={styles.cardTitle}>Panela sem Tampa</Text>
            <Text style={styles.cardSubtitle}>Valor Unitário: R$10,00</Text>
            <Text style={styles.cardSubtitle}>Disponivel: 11 Unidades</Text>
          </View>
        </View>
        <View></View>
      </View>
    </TouchableOpacity>
  );
};

export default ImageCard;

const styles = StyleSheet.create({
  //Card container
  container: {
    flex: 1,
    flexDirection: "row",

    marginBottom: 10,

    borderRadius: borderRadiusNumber,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1.5 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 5,
    backgroundColor: globalStyles.fontColors.headerFontColor,
  },
  imageContainer: {
    padding: 10,
  },

  content: {
    position: "relative",
    justifyContent: "center",
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
  cardDescription: {},

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
