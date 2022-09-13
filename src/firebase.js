import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyB3FM8egCrJo3zjbZ-qMGgofzp4X_BJwbI",
  authDomain: "aweshop-7a999.firebaseapp.com",
  projectId: "aweshop-7a999",
  storageBucket: "aweshop-7a999.appspot.com",
  messagingSenderId: "741920389975",
  appId: "1:741920389975:web:674e19c20cba1464f2dc12",
  measurementId: "G-W4RV5NF8CF"
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const auth = getAuth(app);