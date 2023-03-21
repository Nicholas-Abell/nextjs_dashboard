import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBa5dwLzOu31_on_mjAHqJGURfIUYpUwPc",
    authDomain: "employee-tracker-bfc3e.firebaseapp.com",
    projectId: "employee-tracker-bfc3e",
    storageBucket: "employee-tracker-bfc3e.appspot.com",
    messagingSenderId: "501677873479",
    appId: "1:501677873479:web:63581b1fa9600e2bd79462"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();