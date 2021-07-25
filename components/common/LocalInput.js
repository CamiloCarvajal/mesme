import React from "react";
import { StyleSheet } from "react-native";
import { Input } from "react-native-elements";
import { Color } from "../../styles/Color";

export default function LocalInput({ name, icon }) {
  return (
    <Input
      label={name}
      placeholder={`Ingresa tu ${name.toLowerCase()}`}
      inputContainerStyle={styles.containerStyle}
      labelStyle={styles.labelStyle}
      inputStyle={styles.inputStyle}
      leftIcon={icon}
    />
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    borderBottomColor: Color.redAccent2,
  },
  labelStyle: {
    color: Color.redAccent,
  },
  inputStyle: { marginLeft: 5, fontSize: 20, color: Color.gray },
});
