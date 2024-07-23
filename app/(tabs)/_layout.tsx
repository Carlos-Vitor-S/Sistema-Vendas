import {
  StyleSheet,
  useWindowDimensions,
  View,
  Text,
  TouchableOpacity,
  PixelRatio,
} from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import globalStyles from "../styles/globalStyles";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import {
  GothicA1_400Regular,
  GothicA1_700Bold,
} from "@expo-google-fonts/gothic-a1";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

//Responsividade das Fontes
const fontScale = PixelRatio.getFontScale();
const getFontSize = (size: number) => size / fontScale;

const TabsLayout = () => {
  const insets = useSafeAreaInsets();

  const { width, height } = useWindowDimensions();
  const headerHeight = height * 0.17;
  return (
    <SafeAreaProvider>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: globalStyles.colors.inputColor,
            paddingTop: 2,
            paddingBottom: insets.bottom - 10,
            borderTopColor: globalStyles.colors.separatorColor,
          },
          tabBarLabelStyle: {
            fontFamily: "GothicA1_400Regular",
            paddingBottom: 5,
          },
          headerTintColor: globalStyles.fontColors.headerFontColor,
          headerTitleStyle: {
            fontFamily: "GothicA1_700Bold",
            fontSize: getFontSize(20),
          },

          headerRight: () => (
            <View style={styles.headerRightContainer}>
              <TouchableOpacity>
                <AntDesign
                  name="search1"
                  size={24}
                  color={globalStyles.fontColors.headerFontColor}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Feather
                  name="shopping-cart"
                  size={24}
                  color={globalStyles.fontColors.headerFontColor}
                  style={{ marginLeft: 9, marginRight: 13 }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome
                  name="gear"
                  size={24}
                  color={globalStyles.fontColors.headerFontColor}
                />
              </TouchableOpacity>
            </View>
          ),

          headerStyle: {
            backgroundColor: globalStyles.colors.primaryColor,
            height: headerHeight,
            borderBottomRightRadius: 15,
            borderBottomLeftRadius: 15,
            elevation: 5,
            shadowColor: "#000",
            shadowOffset: { width: 1, height: 1 },
            shadowOpacity: 0.4,
            shadowRadius: 2,
          },
        }}
      >
        <Tabs.Screen
          name="catalogo"
          options={{
            title: "Catalógo",
            tabBarIcon: ({ color, focused, size }) => {
              if (focused) {
                return (
                  <Ionicons
                    name="book"
                    size={size}
                    color={globalStyles.colors.primaryColor}
                  />
                );
              }
              return <Ionicons name="book-outline" size={size} color={color} />;
            },
          }}
        />
        <Tabs.Screen
          name="clientes"
          options={{
            title: "Clientes",
            tabBarIcon: ({ color, focused, size }) => {
              if (focused) {
                return (
                  <Ionicons
                    name="person"
                    size={size}
                    color={globalStyles.colors.primaryColor}
                  />
                );
              }
              return (
                <Ionicons name="person-outline" size={size} color={color} />
              );
            },
          }}
        />
        <Tabs.Screen
          name="adicionar"
          options={{
            title: "Adicionar",
            headerStyle: {
              backgroundColor: "transparent",
              height: headerHeight,
              borderBottomRightRadius: 15,
              borderBottomLeftRadius: 15,
              elevation: 5,
              shadowColor: "#000",
              shadowOffset: { width: 1, height: 1 },
              shadowOpacity: 0.4,
              shadowRadius: 2,
            },
            headerBackground: () => (
              <View
                style={{
                  flex: 1,
                  backgroundColor: globalStyles.fontColors.headerFontColor,
                }}
              >
                <View style={styles.headerBackgroundWhite} />
              </View>
            ),
            tabBarIcon: ({ color, size, focused }) => {
              if (focused) {
                return (
                  <AntDesign
                    name="pluscircle"
                    size={size}
                    color={globalStyles.colors.primaryColor}
                  />
                );
              }
              return <AntDesign name="pluscircleo" size={size} color={color} />;
            },
          }}
        />
        <Tabs.Screen
          name="pedidos"
          options={{
            title: "Pedidos",
            tabBarIcon: ({ color, focused, size }) => {
              if (focused) {
                return (
                  <Ionicons
                    name="bag"
                    size={size}
                    color={globalStyles.colors.primaryColor}
                  />
                );
              }
              return <Ionicons name="bag-outline" size={size} color={color} />;
            },
          }}
        />
        <Tabs.Screen
          name="estatisticas"
          options={{
            title: "Estatisticas",

            headerStyle: {
              backgroundColor: "transparent",
              height: headerHeight,
              borderBottomRightRadius: 15,
              borderBottomLeftRadius: 15,
              elevation: 5,
              shadowColor: "#000",
              shadowOffset: { width: 1, height: 1 },
              shadowOpacity: 0.4,
              shadowRadius: 2,
            },
            headerBackground: () => (
              <View
                style={{
                  flex: 1,
                  backgroundColor: globalStyles.colors.primaryColorLight,
                }}
              >
                <View style={styles.headerBackgroundWhite} />
              </View>
            ),

            tabBarIcon: ({ color, focused, size }) => {
              if (focused) {
                return (
                  <MaterialIcons
                    name="insert-chart"
                    size={size}
                    color={globalStyles.colors.primaryColor}
                  />
                );
              }
              return (
                <MaterialIcons
                  name="insert-chart-outlined"
                  size={size}
                  color={color}
                />
              );
            },
          }}
        />
      </Tabs>
    </SafeAreaProvider>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({
  headerRightContainer: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 1,

    marginRight: 20,
  },
  headerBackgroundWhite: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

    backgroundColor: globalStyles.colors.primaryColor,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,

    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
});
