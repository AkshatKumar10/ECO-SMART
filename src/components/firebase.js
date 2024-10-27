

// // src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";  // Import Firestore


// Firebase configuration from your Firebase console
const firebaseConfig = {
  apiKey: YOUR_API_KEY,
  authDomain: "logineco-195f7.firebaseapp.com",
  databaseURL: "https://logineco-195f7-default-rtdb.firebaseio.com",
  projectId: "logineco-195f7",
  storageBucket: "logineco-195f7.appspot.com",
  messagingSenderId: "627257591149",
  appId: YOUR_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);  // Add and export Firestore


