import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import React from "react";
import globalStyles from "../styles/globalStyles";

const SeparatorText = () => {
  const { width, height } = useWindowDimensions();
  const widthSize = width / 4;
  return (
    <>
      <View style={styles.container}>
        <View style={[styles.line, { width: widthSize }]}></View>
        <Text>24/06/2024</Text>
        <View style={[styles.line, { width: widthSize }]}></View>
      </View>
      <View>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          minus veritatis cum iure sapiente facilis libero ut iusto aliquid.
          Esse accusamus mollitia explicabo eius similique? Dolores fuga optio
          accusantium deserunt!
        </Text>
      </View>
    </>
  );
};

export default SeparatorText;

const styles = StyleSheet.create({
  container: {
    //width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    padding: 20,
    paddingTop: 0,
  },
  line: {
    height: 1,
    backgroundColor: globalStyles.colors.separatorColor,
  },
});
