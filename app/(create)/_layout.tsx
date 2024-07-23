import { StyleSheet, View } from "react-native";
import React from "react";
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
  MaterialTopTabNavigationEventMap,
} from "@react-navigation/material-top-tabs";
import { withLayoutContext } from "expo-router";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";
import NovoCliente from "./novoCliente";
import NovoPedido from "./novoPedido";
import globalStyles from "../styles/globalStyles";

const { Navigator } = createMaterialTopTabNavigator();

const Tab = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

const TopTabsLayout = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 1.5 },
          shadowOpacity: 0.1,
          shadowRadius: 1,
          elevation: 5,
        },

        tabBarLabelStyle: {
          fontFamily: "GothicA1_600SemiBold",
          textTransform: "none",
          fontSize: 15,
        },
        tabBarIndicatorStyle: {
          backgroundColor: globalStyles.colors.indicatorColor,
        },

        tabBarActiveTintColor: globalStyles.fontColors.darkFontColor,
      }}
    >
      <Tab.Screen name="Pedido" component={NovoPedido} />
      <Tab.Screen name="Cliente" component={NovoCliente} />
    </Tab.Navigator>
  );
};

export default TopTabsLayout;

const styles = StyleSheet.create({});
