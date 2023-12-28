// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsmjYulVaZFJFTOim9SSOImq6V1DQKpTI",
  authDomain: "testotp-b477e.firebaseapp.com",
  projectId: "testotp-b477e",
  storageBucket: "testotp-b477e.appspot.com",
  messagingSenderId: "287560533741",
  appId: "1:287560533741:web:bc6a239daa69c79fcd2ee4",
  measurementId: "G-GNZ8QYTP8K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth  = getAuth(app);
//const analytics = getAnalytics(app);
export default auth;