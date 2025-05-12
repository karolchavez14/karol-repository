import { initializeApp } from "firebase/app"
import { getAuth} from 'firebase/auth'
import { getFirestore} from 'firebase/firestore'
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
export const auth = getAuth(app)
export const db = getFirestore(app)