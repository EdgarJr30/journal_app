// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXMPKrGyOLIq1LD72gO3x1CZbXbmETOC4",
  authDomain: "react-cursos-ea029.firebaseapp.com",
  projectId: "react-cursos-ea029",
  storageBucket: "react-cursos-ea029.appspot.com",
  messagingSenderId: "1007077572855",
  appId: "1:1007077572855:web:1259000408cdee60cf53f2",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
