// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-estate-9ed43.firebaseapp.com",
    projectId: "mern-estate-9ed43",
    storageBucket: "mern-estate-9ed43.appspot.com",
    messagingSenderId: "379561590617",
    appId: "1:379561590617:web:d9d9961640e83a398f1648"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);