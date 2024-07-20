import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const ImageCard = () => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.header}></View>
      </View>
    </TouchableOpacity>
  );
};

export default ImageCard;

const styles = StyleSheet.create({
  container: {},

  header: {},
});
