import firebase from "firebase/app"
import "firebase/auth"

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCMgN1oafqcrQqAk0KM_Ld5v1zTUUseFPU",
    authDomain: "unichat-b9c72.firebaseapp.com",
    projectId: "unichat-b9c72",
    storageBucket: "unichat-b9c72.appspot.com",
    messagingSenderId: "279358439384",
    appId: "1:279358439384:web:6f2e74376b7754e24bbcad"
  }).auth();
