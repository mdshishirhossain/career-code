// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5bRtMhp_zc3VfnQgT-EuUAhLmndPpet0",
  authDomain: "career-code-f7953.firebaseapp.com",
  projectId: "career-code-f7953",
  storageBucket: "career-code-f7953.firebasestorage.app",
  messagingSenderId: "777810717257",
  appId: "1:777810717257:web:cce37951c91db50e81ed98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);