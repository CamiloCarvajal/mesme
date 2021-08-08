import "firebase/firestore";
import * as firebase from "firebase";
import { firebaseApp } from "./firebase";

const db = firebase.firestore(firebaseApp);

export const registerNewUser = async (email, password) => {
  const result = { statusResponse: false, error: null };
  try {
    result.statusResponse = true;
    await firebase.auth().createUserWithEmailAndPassword(email, password);
  } catch (error) {
    result.error = "El usuario ya existe";
  }
  return result;
};

export const updateProfile = async (data) => {
  const result = { statusResponse: false, error: null };
  try {
    result.statusResponse = true;
    await firebase.auth().currentUser.updateProfile(data);
  } catch (error) {
    result.error = error;
  }
  return result;
};

export const loginWithEmailAndPassword = async (email, password) => {
  const result = { statusResponse: false, error: null };

  try {
    result.statusResponse = true;
    await firebase.auth().signInWithEmailAndPassword(email, password);
  } catch (error) {
    result.error = "Usuario o contraseña no validos";
  }
  return result;
};

export const addDocumentWithoutId = async (collection, data) => {
  const result = { statusResponse: false, error: null };
  try {
    result.statusResponse = true;
    await db.collection(collection).add(data);
  } catch (error) {
    result.error = error;
  }
  return result;
};
