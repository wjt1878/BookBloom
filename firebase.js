import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth/react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyCJClJ6rajhmCNrgHAH1dddmCJaF1ZpAzo",
  authDomain: "bookbloom-dcf4a.firebaseapp.com",
  projectId: "bookbloom-dcf4a",
  storageBucket: "bookbloom-dcf4a.appspot.com",
  messagingSenderId: "674651809775",
  appId: "1:674651809775:web:72e1068683df91b060f81a",
  measurementId: "G-28SQLX0LSR"
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { auth };