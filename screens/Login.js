import React from "react";
import LoginForm from "../components/LoginForm";
import { StyleSheet, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { Color } from "../styles/Color";

export default function Login({ navigation }) {
  return (
    <KeyboardAwareScrollView style={styles.container}>
      <View>
        <LoginForm navigation={navigation} />
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
