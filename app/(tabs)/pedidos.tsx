import { View, Text, ScrollView } from "react-native";
import React from "react";
import HeaderFooterCard from "../components/headerFooterCard";
import Status from "../components/status";

const Pedidos = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Status />
      <HeaderFooterCard />
      <HeaderFooterCard />
      <HeaderFooterCard />
      <HeaderFooterCard />
    </ScrollView>
  );
};

export default Pedidos;
