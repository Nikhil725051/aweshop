import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "API_key_here",
  authDomain: "aweshop-7a999.firebaseapp.com",
  projectId: "aweshop-7a999",
  storageBucket: "aweshop-7a999.appspot.com",
  messagingSenderId: "741920389975",
  appId: "App_id_here",
  measurementId: "G-W4RV5NF8CF"
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const auth = getAuth(app);