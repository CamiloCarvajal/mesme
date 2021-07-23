import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Input, Button, Icon } from "react-native-elements";

export default function LoginForm() {
  return (
    <View>
      <Input label="Email" placeholder="Ingresa tu email" />
      <Input label="Contraseña" placeholder="Ingresa tu contraseña" />
      <View style={{ flexDirection: "row" }}>
        <Button title="Ingresar" />
        <Button title="Crear cuenta" type="outline" />
      </View>
      <Text>Recuperar contraseña</Text>
      <View style={{ flexDirection: "row" }}>
        <Icon name="google" type="fontisto" color="#FF5733" size={20} reverse />
        <Icon
          name="facebook"
          type="fontisto"
          color="#2B58B4"
          size={20}
          reverse
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
