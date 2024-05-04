// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxO9h7ha2cNkHskcm8ZBG-xTsszQr-aGA",
  authDomain: "it-sysarch32-store-cordero.firebaseapp.com",
  projectId: "it-sysarch32-store-cordero",
  storageBucket: "it-sysarch32-store-cordero.appspot.com",
  messagingSenderId: "301932452771",
  appId: "1:301932452771:web:e7c7e78fa3299eafd01816",
  measurementId: "G-Y0RFCK51R9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);