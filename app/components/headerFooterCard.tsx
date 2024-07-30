import {
  PixelRatio,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import globalStyles from "../styles/globalStyles";
import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
//border radius geral
const borderRadiusNumber = 10;
//Responsividade das Fontes
const fontScale = PixelRatio.getFontScale();
const getFontSize = (size: number) => size / fontScale;

const HeaderFooterCard = () => {
  const router = useRouter();
  return (
    <TouchableOpacity onPress={() => router.push("/DescricaoCliente")}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.textDate}>Feito: 20/09/09</Text>
          <Text style={styles.textNumber}>Pedido 0001</Text>
        </View>
        <View style={styles.cardDescription}>
          <View style={styles.cardDescriptionTop}>
            <Text style={styles.cardTitle}>Supermercado X</Text>
            <View style={styles.codContainer}>
              <Text style={styles.codText}>Cod 100</Text>
            </View>
          </View>
          <View style={styles.cardDescriptionBody}>
            <Text style={styles.cardSubtitle}>Supermecado X e Cia Ltda</Text>
            <View style={styles.cardAddressContainer}>
              <Ionicons
                name="location-outline"
                size={15}
                color={globalStyles.fontColors.darkFontColor}
              />
              <Text style={styles.cardAddress}>
                Rua Simão Dias, 999, Centro - Nossa Senhora da Gloria/SE
              </Text>
            </View>
          </View>
          <View style={styles.cardDescriptionFooter}>
            <Text style={styles.textValue}>
              <Text style={styles.textValueName}>Desconto :</Text> 15%
            </Text>
            <Text style={styles.textValue}>
              <Text style={styles.textValueName}>Valor :</Text> R$1000,00
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HeaderFooterCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
    borderRadius: borderRadiusNumber,
    backgroundColor: globalStyles.fontColors.headerFontColor,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1.5 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 5,
  },

  headerContainer: {
    backgroundColor: globalStyles.colors.pendingColor,
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
    alignContent: "center",
    flexDirection: "row",
    borderTopRightRadius: borderRadiusNumber,
    borderTopLeftRadius: borderRadiusNumber,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0.5 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 2,
  },

  textDate: {
    marginLeft: 5,
    fontSize: getFontSize(13),
    fontFamily: "GothicA1_700Bold",
    color: globalStyles.colors.inputColor,
  },

  textNumber: {
    marginRight: 5,
    fontSize: getFontSize(13),
    fontFamily: "GothicA1_700Bold",
    color: globalStyles.colors.inputColor,
  },

  cardDescription: {
    padding: 10,
  },

  cardDescriptionTop: {
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 7,
    paddingRight: 7,
    marginTop: 5,
  },

  cardDescriptionBody: {
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "flex-start",
    paddingLeft: 7,
    paddingRight: 7,

    marginTop: 2,
    marginBottom: 15,
  },

  //Texto titulo do card
  cardTitle: {
    fontFamily: "GothicA1_700Bold",
    color: globalStyles.fontColors.darkFontColor,
    fontSize: getFontSize(17),
    marginTop: 2,
  },

  cardSubtitle: {
    fontFamily: "GothicA1_500Medium",
    color: globalStyles.fontColors.lighterFontColor,
    marginTop: 2,
    fontSize: getFontSize(14),
  },

  cardAddressContainer: {
    marginTop: 8,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  cardAddress: {
    fontFamily: "GothicA1_500Medium",
    color: globalStyles.fontColors.lighterFontColor,

    fontSize: getFontSize(11),
  },

  codContainer: {
    padding: 6,
    backgroundColor: globalStyles.colors.pendingColor,
    borderRadius: 6,
  },

  //Texto cod do card
  codText: {
    fontSize: getFontSize(13),
    fontFamily: "GothicA1_700Bold",
    color: globalStyles.colors.inputColor,
  },

  cardDescriptionFooter: {
    paddingLeft: 9,
    paddingRight: 9,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    marginTop: 5,
    marginBottom: 12,
  },

  textValueName: {
    fontSize: getFontSize(14),
    fontFamily: "GothicA1_700Bold",
    color: globalStyles.fontColors.darkFontColor,
  },

  textValue: {
    fontSize: getFontSize(14),
    fontFamily: "GothicA1_500Medium",
    color: globalStyles.fontColors.lighterFontColor,
  },
});
