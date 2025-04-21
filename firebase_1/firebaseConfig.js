// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkQeBYFJxLPUTM3nnDHSRbUgq6hGjTizM",
  authDomain: "fir-1-267dd.firebaseapp.com",
  projectId: "fir-1-267dd",
  storageBucket: "fir-1-267dd.firebasestorage.app",
  messagingSenderId: "761745686495",
  appId: "1:761745686495:web:9d1d44df3c7b332d220e6a",
  measurementId: "G-GL77XSSDYR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);