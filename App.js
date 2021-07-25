import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./navigations/Navigation";

export default function App() {
  return <Navigation />;

  // (
  //   <View style={styles.container}>
  //     {/* <StatusBar style="inverted" /> */}
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    // backgroundColor: "#c5b1b2",
  },
});
