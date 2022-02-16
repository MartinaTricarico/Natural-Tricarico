import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD_USTT-TUNG6uf1FLTZ7LJ7iyixorEjCQ",
  authDomain: "natural-tricarico-8ecab.firebaseapp.com",
  projectId: "natural-tricarico-8ecab",
  storageBucket: "natural-tricarico-8ecab.appspot.com",
  messagingSenderId: "114127471254",
  appId: "1:114127471254:web:7c19c9d48846caccf878b7",
  measurementId: "G-EZVQ7GJQE1",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();

auth.useDeviceLanguage();

export const db = getFirestore(app);

export const googleProvider = new GoogleAuthProvider();
