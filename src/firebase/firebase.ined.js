// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBFhJAHqON3sk83W8L4P5DKgHkWkKCMd6o",
    authDomain: "timple-firebase-auth-3b16f.firebaseapp.com",
    projectId: "timple-firebase-auth-3b16f",
    storageBucket: "timple-firebase-auth-3b16f.appspot.com",
    messagingSenderId: "466534353007",
    appId: "1:466534353007:web:7afae6d9120c47e3de659a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;