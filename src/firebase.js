// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBP4rQfDF4Y41bQMZVTnNumG4_zywQp8Os",
  authDomain: "dashboard-auth-3f0c8.firebaseapp.com",
  projectId: "dashboard-auth-3f0c8",
  storageBucket: "dashboard-auth-3f0c8.appspot.com",
  messagingSenderId: "1018876604417",
  appId: "1:1018876604417:web:d6c673dd17d96bf9d21000",
  measurementId: "G-F1VV1GEW5W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
export { auth, provider };
export default getFirestore();
