import {
  Dimensions,
  PixelRatio,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import globalStyles from "../styles/globalStyles";
//Responsividade das Fontes
const fontScale = PixelRatio.getFontScale();
const getFontSize = (size: number) => size / fontScale;
const ListLayout = () => {
  const { width, height } = useWindowDimensions();
  const widthSize = width;

  return (
    <View style={styles.container}>
      <View style={styles.dateBarContainer}>
        <View
          style={[styles.line, { width: widthSize * 0.34, marginEnd: 10 }]}
        ></View>
        <Text style={styles.dateBarText}>24/06/2024</Text>
        <View
          style={[styles.line, { width: widthSize * 0.34, marginStart: 10 }]}
        ></View>
      </View>
      <TouchableOpacity>
        <View style={styles.infoContainer}>
          <View style={styles.leftSideContainer}>
            <View style={styles.codContainer}>
              <Text style={styles.codText}>Pedido 0001</Text>
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>Supermercado X</Text>
            </View>
          </View>
          <View style={styles.valueContainer}>
            <Text style={styles.valueText}>R$ 1000,00</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.infoContainer}>
          <View style={styles.leftSideContainer}>
            <View style={styles.codContainer}>
              <Text style={styles.codText}>Pedido 0001</Text>
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>Supermercado X</Text>
            </View>
          </View>
          <View style={styles.valueContainer}>
            <Text style={styles.valueText}>R$ 1000,00</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ListLayout;

const styles = StyleSheet.create({
  container: {},
  dateBarContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },

  dateBarText: {
    fontSize: getFontSize(13),
    fontFamily: "GothicA1_500Medium",
    color: globalStyles.fontColors.lighterFontColor,
  },

  line: {
    height: 1,
    backgroundColor: globalStyles.colors.separatorColor,
  },

  infoContainer: {
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  leftSideContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  codContainer: {
    marginRight: 8,

    justifyContent: "flex-start",
    padding: 8,
    backgroundColor: globalStyles.colors.primaryColor,
    borderRadius: 6,
  },

  titleContainer: {
    justifyContent: "flex-start",
  },

  titleText: {
    fontSize: getFontSize(14),
    fontFamily: "GothicA1_600SemiBold",
    color: globalStyles.fontColors.darkFontColor,
  },

  codText: {
    fontSize: getFontSize(13),
    fontFamily: "GothicA1_700Bold",
    color: globalStyles.colors.inputColor,
  },

  valueContainer: {},

  valueText: {
    fontSize: getFontSize(13),
    fontFamily: "GothicA1_500Medium",
    color: globalStyles.colors.primaryColor,
  },
});
