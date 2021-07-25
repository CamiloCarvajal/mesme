import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/Login";
import Register from "../screens/Register";

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen
          name="login"
          component={Login}
          options={{
            title: "Inicio de sesión",
          }}
        />
        <Stack.Screen
          name="register"
          component={Register}
          options={{
            title: "Registro",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
