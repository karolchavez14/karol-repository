import { useState } from "react";
import "./styles.css";
import firebase from "../firebaseConfig";
import { addDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth;"

export default function App() { 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [displayName, setDisplayName] = useState("");

    const handleSignup = async () => {
        const auth = getAuth ();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential)) => {

            const user = userCredential.user;
        })
    }
}