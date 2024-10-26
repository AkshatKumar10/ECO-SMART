

// // src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";  // Import Firestore


// Firebase configuration from your Firebase console
const firebaseConfig = {
  apiKey: YOUR_API_KEY,
  authDomain: "ecowaste-5efd7.firebaseapp.com",
  projectId: "ecowaste-5efd7",
  storageBucket: "ecowaste-5efd7.appspot.com",
  messagingSenderId: "611861820815",
  appId: YOUR_APP_ID,
  measurementId: "G-BR0C5ZJBWY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);  // Add and export Firestore


