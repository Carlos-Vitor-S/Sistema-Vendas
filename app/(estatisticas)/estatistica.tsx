import {
  PixelRatio,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";

import InfoCard from "../components/infoCard";

import SeparatorText from "../components/listLayout";
import ListLayout from "../components/listLayout";

const Estatisticas = () => {
  //Responsividade das Fontes
  const fontScale = PixelRatio.getFontScale();
  const getFontSize = (size: number) => size / fontScale;
  //Responsividade Margem
  const { width, height } = useWindowDimensions();
  const reponsiveMargin = height * 0.06;
  return (
    <>
      <InfoCard />
      <View style={{ flex: 4, marginTop: reponsiveMargin, padding: 10 }}>
        <ScrollView>
          <View style={styles.container}>
            <ListLayout />
            <ListLayout />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Estatisticas;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginTop: 0,
  },
});
