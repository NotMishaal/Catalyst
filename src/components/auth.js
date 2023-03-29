import { auth, googleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import { async } from "@firebase/util";

export const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // sign in func with email & pass
    const signIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (err) {
            console.error(err);
        }
    };

    // sign in func with google popup
    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (err) {
            console.error(err);
        }
    };

    // sign out func
    const logOut = async () => {
        try {
            await signOut(auth);
        } catch (err) {
            console.error(err);
        }
    };

    return <div>
        <input
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
        />

        <input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={signIn}>Sign In</button>

        <button onClick={signInWithGoogle}>Sign In with Google</button>

        <button onClick={logOut}>Log Out</button>
    </div>
}