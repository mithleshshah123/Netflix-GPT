// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXvhZWYG0B7DKrfqkY8_7BeDSk02b0Zeg",
  authDomain: "netflix-gpt-affa9.firebaseapp.com",
  projectId: "netflix-gpt-affa9",
  storageBucket: "netflix-gpt-affa9.firebasestorage.app",
  messagingSenderId: "746007096495",
  appId: "1:746007096495:web:ae6924d17e0b96a41a785a",
  measurementId: "G-NT4R8EBY97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();