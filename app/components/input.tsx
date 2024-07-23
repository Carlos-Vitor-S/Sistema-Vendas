import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import globalStyles from "../styles/globalStyles";

const Input = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="useless placeholder"
        style={styles.inputField}
        keyboardType="default"
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: globalStyles.colors.inputColor,

    paddingTop: 12,
    paddingBottom: 12,
    padding: 10,
    borderRadius: 8,
    flex: 1,

    borderWidth: 1,
    borderColor: globalStyles.colors.separatorColor,
    marginBottom: 10,
  },
  inputField: {
    height: 25,
  },
});
