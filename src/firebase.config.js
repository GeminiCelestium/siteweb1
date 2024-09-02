// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFefpPvWEJ7Jo7q-IDRZUFnbggVhpVKgY",
  authDomain: "projetpersonnel1-26ee5.firebaseapp.com",
  projectId: "projetpersonnel1-26ee5",
  storageBucket: "projetpersonnel1-26ee5.appspot.com",
  messagingSenderId: "374879846910",
  appId: "1:374879846910:web:6512980693d2bc8ee1c0af",
  measurementId: "G-MSXQ5GW8PD"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

// Initialiser Firebase
//firebase.initializeApp(firebaseConfig);

// Exporter les services nécessaires directement
//export const auth = firebase.auth();
//export const db = firebase.firestore();


// Initialiser Firebase
const app = initializeApp(firebaseConfig);

// Exporter les services nécessaires
export const auth = getAuth(app);
export const db = getFirestore(app);