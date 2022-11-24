import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';


export const AuthContext = createContext();

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // google log in
    const provider = new GoogleAuthProvider();

    const googleLogIn = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    // create user with email and password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //  sign in  method with firebase 
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // update profile user
    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo);
    }

    // log out method
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // manage user the state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('User observing');
            setUser(currentUser);
            setLoading(false);

        });

        return () => unsubscribe();
    }, [])


    const authInfo = {
        googleLogIn,
        createUser,
        signIn,
        updateUser,
        user,
        logOut,
        loading


    }

    return (
        <AuthContext.Provider
            value={authInfo}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;