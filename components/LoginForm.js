import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Icon, Card, Avatar, Input } from "react-native-elements";
import { Color } from "../styles/Color";

export default function LoginForm({ navigation }) {
  function logIn() {
    navigation.navigate("register");
  }

  return (
    <View style={styles.viewContainer}>
      <Card containerStyle={styles.cardContainer}>
        <Card.Title>
          <Avatar
            size="large"
            rounded
            source={require("../assets/mesMe_v2.png")}
          />
        </Card.Title>
        <Input
          label="Email"
          placeholder="Ingresa tu email"
          inputContainerStyle={styles.containerStyle}
          labelStyle={styles.labelStyle}
          inputStyle={styles.inputStyle}
          keyboardType="email-address"
          leftIcon={{
            type: "material",
            name: "email",
            size: 23,
            color: Color.redAccent,
          }}
        />
        <Input
          label="Contraseña"
          placeholder="Ingresa tu contraseña"
          inputContainerStyle={styles.containerStyle}
          labelStyle={styles.labelStyle}
          inputStyle={styles.inputStyle}
          secureTextEntry={true}
          leftIcon={{
            type: "fontisto",
            name: "key",
            size: 23,
            color: Color.redAccent,
          }}
        />
        <Button
          title="Ingresar"
          buttonStyle={{ backgroundColor: Color.redDark }}
        />
        <Button
          title="Crear cuenta"
          type="clear"
          titleStyle={{ color: Color.redDark }}
          onPress={logIn}
          icon={{
            type: "entypo",
            name: "squared-plus",
            size: 20,
            color: Color.redAccent,
          }}
        />
        <Button
          title="Recuperar contraseña"
          type="clear"
          titleStyle={{ color: Color.redAccent }}
        />
        <Card.Divider />
        <View style={styles.rowContainer}>
          <Icon
            name="google"
            type="fontisto"
            color="#FF5733"
            size={18}
            reverse
          />
          <Icon
            name="facebook"
            type="fontisto"
            color="#2B58B4"
            size={18}
            reverse
          />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    width: "100%",
    alignContent: "center",
    justifyContent: "center",
    marginVertical: 4,
  },
  containerStyle: {
    borderBottomColor: Color.redAccent2,
  },
  labelStyle: {
    color: Color.redAccent,
  },
  inputStyle: {
    marginLeft: 5,
    fontSize: 20,
    color: Color.gray,
  },
  cardContainer: {
    elevation: 15,
    borderRadius: 5,
    width: "90%",
  },
  viewContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
});
