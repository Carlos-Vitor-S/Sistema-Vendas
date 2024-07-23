import { View, Text, ScrollView } from "react-native";
import React from "react";
import HeaderFooterCard from "../components/headerFooterCard";
import Status from "../components/status";

const Pedidos = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}>
        <Status />
        <View>
          <HeaderFooterCard />
        </View>
        <HeaderFooterCard />
        <HeaderFooterCard />
        <HeaderFooterCard />
      </View>
    </ScrollView>
  );
};

export default Pedidos;
