import firebase from "firebase";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDu6BLtNOr7rNjz3u0kStWc2U26O74pvyc",
  authDomain: "fir-749b0.firebaseapp.com",
  projectId: "fir-749b0",
  storageBucket: "fir-749b0.appspot.com",
  messagingSenderId: "788759253765",
  appId: "1:788759253765:web:46f51ae33f3bb756a69d6c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
