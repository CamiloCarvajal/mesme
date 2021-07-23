import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <View>
      <Text>
        Vestibulum et pretium diam. Nulla pellentesque mi nunc, et consectetur
        ipsum porta a. Nam in leo a urna egestas vestibulum non in nunc. Nunc
        volutpat congue gravida. Praesent ornare purus consectetur, lacinia
        felis a, tincidunt ante.
      </Text>
      <LoginForm />
    </View>
  );
}

const styles = StyleSheet.create({});
