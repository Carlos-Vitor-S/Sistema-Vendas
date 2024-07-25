import {
  PixelRatio,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import globalStyles from "../styles/globalStyles";
import {
  GothicA1_600SemiBold,
  GothicA1_700Bold,
} from "@expo-google-fonts/gothic-a1";
import InfoCard from "../components/infoCard";
import { SafeAreaView } from "react-native-safe-area-context";
import SeparatorText from "../components/listLayout";

const Estatisticas = () => {
  //Responsividade das Fontes
  const fontScale = PixelRatio.getFontScale();
  const getFontSize = (size: number) => size / fontScale;
  //Responsividade Margem
  const { width, height } = useWindowDimensions();
  const reponsiveMargin = height * 0.08;
  return (
    <>
      <InfoCard />
      <View style={{ flex: 4, marginTop: reponsiveMargin }}>
        <ScrollView>
          <View style={styles.container}>
            <SeparatorText />
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
