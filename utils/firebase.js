import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  // PUT HERE FIREBASE CONNECTION
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
