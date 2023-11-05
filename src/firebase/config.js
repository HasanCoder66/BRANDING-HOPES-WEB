// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC1SBCVqWi3CjUfE8Ekh03VUmiVOl5z2lI",
  authDomain: "branding-hopes-web.firebaseapp.com",
  projectId: "branding-hopes-web",
  storageBucket: "branding-hopes-web.appspot.com",
  messagingSenderId: "294892811191",
  appId: "1:294892811191:web:c2abbe17215ebd7d222e32",
  measurementId: "G-J1H06FGNL9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()


export {
    getAuth,
    createUserWithEmailAndPassword,
    auth,
    app,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut 
  };