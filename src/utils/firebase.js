// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPpgxxk5XGj2q9mNHp0Rob3zgim_y9mH8",
  authDomain: "netflixgpt-3ae2e.firebaseapp.com",
  projectId: "netflixgpt-3ae2e",
  storageBucket: "netflixgpt-3ae2e.firebasestorage.app",
  messagingSenderId: "102707526374",
  appId: "1:102707526374:web:d0f9ddf67a1f9b3fcc5927",
  measurementId: "G-5GVZCTRKTE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
