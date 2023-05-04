// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-8t4LjtoGtu0v1EikaQqTZXNUeaqzt00",
  authDomain: "bkops-1c88d.firebaseapp.com",
  projectId: "bkops-1c88d",
  storageBucket: "bkops-1c88d.appspot.com",
  messagingSenderId: "77994004879",
  appId: "1:77994004879:web:0f928d0454828299b77bfa",
  measurementId: "G-VB96L1M3X1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);