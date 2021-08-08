import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
// import NetInfo from "@react-native-community/netinfo";
import { Button, Icon, Card, Avatar, Input } from "react-native-elements";

import Modal from "./Modal";
import { Color } from "../styles/Color";
import { validateEmail } from "../utils/helpers";
import { registerNewUser, updateProfile } from "../utils/DataAcces";

// PENDING:
// Split name and last name
// Add zipcode to phone
// Load image profile
// See the password characters

export default function RegisterForm({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({});
  const [errorPhone, setErrorPhone] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPass, setErrorConfirmPass] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const addInfo = (e, type) => {
    setUserData({ ...userData, [type]: e.nativeEvent.text });
  };

  function validateData() {
    let isValid = true;
    setErrorEmail("");
    setErrorName("");
    setErrorPhone("");
    setErrorPassword("");
    setErrorConfirmPass("");

    if (!userData.displayName || userData.displayName.trim() == "") {
      isValid = false;
      setErrorName("Ingrese un nombre válido");
    } else if (userData.displayName.length > 60) {
      isValid = false;
      setErrorName("Ingrese un nombre mas corto");
    }

    if (!userData.email || !validateEmail(userData.email)) {
      isValid = false;
      setErrorEmail("Ingrese un correo electrónico válido");
    }

    if (!userData.phone || userData.phone.length != 10) {
      isValid = false;
      setErrorPhone("Ingrese un teléfono válido");
    }

    if (!userData.password) {
      isValid = false;
      setErrorPassword("Ingrese una contraseña válida");
    } else if (!userData.rePassword) {
      isValid = false;
      setErrorConfirmPass("Ingrese una confirmación de contraseña");
    } else if (userData.password != userData.rePassword) {
      isValid = false;
      setErrorPassword("Las contraseñas no coinciden");
      setErrorConfirmPass("Las contraseñas no coinciden");
    } else if (userData.password.length < 8 || userData.rePassword.length < 8) {
      isValid = false;
      setErrorPassword("La contraseña debe contener al menos 8 caracteres");
      setErrorConfirmPass(
        "La confirmación contraseña debe contener al menos 8 caracteres"
      );
    }

    return isValid;
  }

  async function registerUser() {
    if (!validateData()) {
      return;
    }

    setLoading(true);
    const result = await registerNewUser(userData.email, userData.password);
    if (!result.statusResponse) {
      setLoading(false);
      setIsVisible(true);
      return;
    }

    const resultUpdate = await updateProfile(userData);
    if (!resultUpdate.statusResponse) {
      setLoading(false);
      setIsVisible(true);
      return;
    }

    setLoading(false);
    navigation.goBack();
  }

  return (
    <View style={styles.viewContainer}>
      <Card containerStyle={styles.cardContainer}>
        <Card.Title>
          <Avatar
            size="large"
            rounded
            source={require("../assets/camera_photo_upload_icon.png")}
            containerStyle={{ elevation: 1 }}
          />
        </Card.Title>
        <Input
          label="Nombre"
          placeholder="Ingresa tu nombre"
          inputContainerStyle={styles.containerStyle}
          errorMessage={errorName}
          labelStyle={styles.labelStyle}
          inputStyle={styles.inputStyle}
          onChange={(e) => addInfo(e, "displayName")}
        />
        <Input
          label="Teléfono"
          placeholder="Ingresa tu teléfono"
          inputContainerStyle={styles.containerStyle}
          errorMessage={errorPhone}
          labelStyle={styles.labelStyle}
          inputStyle={styles.inputStyle}
          keyboardType="phone-pad"
          onChange={(e) => addInfo(e, "phone")}
        />
        <Card.Divider />
        <Input
          label="Correo electrónico"
          placeholder="Ingresa tu email"
          inputContainerStyle={styles.containerStyle}
          errorMessage={errorEmail}
          labelStyle={styles.labelStyle}
          inputStyle={styles.inputStyle}
          keyboardType="email-address"
          onChange={(e) => addInfo(e, "email")}
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
          errorMessage={errorPassword}
          labelStyle={styles.labelStyle}
          inputStyle={styles.inputStyle}
          secureTextEntry={true}
          onChange={(e) => addInfo(e, "password")}
          leftIcon={{
            type: "fontisto",
            name: "key",
            size: 23,
            color: Color.redAccent,
          }}
        />
        <Input
          label="Confirmar contraseña"
          placeholder="Confirma la contraseña"
          inputContainerStyle={styles.containerStyle}
          errorMessage={errorConfirmPass}
          labelStyle={styles.labelStyle}
          inputStyle={styles.inputStyle}
          secureTextEntry={true}
          onChange={(e) => addInfo(e, "rePassword")}
          leftIcon={{
            type: "fontisto",
            name: "key",
            size: 23,
            color: Color.redAccent,
          }}
        />

        <Button
          title="Aceptar"
          buttonStyle={{ backgroundColor: Color.redDark }}
          onPress={registerUser}
          loading={loading}
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
      <Modal isVisible={isVisible} setIsVisible={setIsVisible}>
        <ModalMessage message="MOSTRANDO MODAL..." />
      </Modal>
    </View>
  );
}

function ModalMessage({ message }) {
  return (
    <View>
      <Text>{message}</Text>
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
    marginBottom: 20,
  },
});
