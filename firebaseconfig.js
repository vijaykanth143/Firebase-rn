// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANX4Zvvbn6dquO5wjQfo9CzpL1mUQzWIc",
  authDomain: "rn-firebase-6b7c6.firebaseapp.com",
  projectId: "rn-firebase-6b7c6",
  storageBucket: "rn-firebase-6b7c6.appspot.com",
  messagingSenderId: "1036620810185",
  appId: "1:1036620810185:web:899c654fb0d9eb40e90a18",
  measurementId: "G-V3V2BD9WJ2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
