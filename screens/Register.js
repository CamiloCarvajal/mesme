import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RegisterForm from "../components/RegisterForm";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { Color } from "../styles/Color";

export default function Register({ navigation }) {
  return (
    <KeyboardAwareScrollView style={styles.container}>
      <View>
        <RegisterForm navigation={navigation} />
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: "100%",
    height: "100%",
    backgroundColor: Color.redAccent,
  },
});
