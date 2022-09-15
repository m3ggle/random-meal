// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5zdk4PiByEt4PK_3gCNfhm_NsFg3R0bk",
  authDomain: "random-meals-39585.firebaseapp.com",
  projectId: "random-meals-39585",
  storageBucket: "random-meals-39585.appspot.com",
  messagingSenderId: "229554699153",
  appId: "1:229554699153:web:87a17ca96a777344d0b830",
  measurementId: "G-G30LJZ8PVV",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);
export const db = getFirestore();