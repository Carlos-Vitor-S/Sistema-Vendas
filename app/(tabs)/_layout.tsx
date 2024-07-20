import {
  StyleSheet,
  useWindowDimensions,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import globalStyles from "../styles/globalStyles";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import {
  GothicA1_400Regular,
  GothicA1_700Bold,
} from "@expo-google-fonts/gothic-a1";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const TabsLayout = () => {
  const insets = useSafeAreaInsets();

  const { width, height } = useWindowDimensions();
  const headerHeight = height * 0.15;
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
            fontSize: 17,
          },

          headerRight: () => (
            <View style={styles.headerRightContainer}>
              <TouchableOpacity style={{ marginRight: 8 }}>
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
    justifyContent: "space-around",
    flexDirection: "row",

    marginRight: 20,
  },
});
