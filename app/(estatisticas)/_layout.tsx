import { PixelRatio, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import globalStyles from "../styles/globalStyles";
import Estatisticas from "./estatistica";
import Remover from "./remover";
import Remover1 from "./remover1";
const Tab = createMaterialTopTabNavigator();

const TopTabsLayoutE = () => {
  //Responsividade das Fontes
  const fontScale = PixelRatio.getFontScale();
  const getFontSize = (size: number) => size / fontScale;
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          shadowOpacity: 0,
          borderWidth: 0,
          borderBottomWidth: 0,
          backgroundColor: globalStyles.colors.primaryColor,
        },

        tabBarLabelStyle: {
          fontFamily: "GothicA1_600SemiBold",
          textTransform: "none",
          color: globalStyles.fontColors.headerFontColor,
          fontSize: getFontSize(15),
        },
        tabBarIndicatorStyle: {
          backgroundColor: globalStyles.fontColors.headerFontColor,
        },
        tabBarIndicatorContainerStyle: {
          borderWidth: 0,
          borderTopWidth: 0,
          borderBottomWidth: 0,
        },

        tabBarActiveTintColor: globalStyles.fontColors.darkFontColor,
      }}
    >
      <Tab.Screen name="Janeiro/24" component={Estatisticas} />
      <Tab.Screen name="Fevereiro/24" component={Remover} />
      <Tab.Screen name="Março/24" component={Remover1} />
    </Tab.Navigator>
  );
};

export default TopTabsLayoutE;

const styles = StyleSheet.create({});
