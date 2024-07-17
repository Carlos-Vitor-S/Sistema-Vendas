import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="catalogo" />
      <Tabs.Screen name="clientes" />
      <Tabs.Screen name="adicionar" />
      <Tabs.Screen name="pedidos" />
      <Tabs.Screen name="estatisticas" />
    </Tabs>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({});
