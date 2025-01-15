// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOSKAeb6Vlwu7rxkwZeBfK0p4vEc8znI4",
  authDomain: "react-firebase-71719.firebaseapp.com",
  projectId: "react-firebase-71719",
  storageBucket: "react-firebase-71719.firebasestorage.app",
  messagingSenderId: "942230844708",
  appId: "1:942230844708:web:90edb15a64f9fa11c7efb1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
