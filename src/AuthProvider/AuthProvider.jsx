import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.init';

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)    
    // googleSignIn
    const googleprovider = new GoogleAuthProvider();
   
    const googleSignIn =() => {
        setLoading(true)
        return signInWithPopup(auth, googleprovider);
    }
    
    // githubSignIn
    const githubprovider = new GithubAuthProvider();

    const githubSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, githubprovider);
    } 
    
    // SignInWithEmailAndPassword
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }  
    
    // updateUserProfile
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)      
    }
    // signup with password
    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    
    console.log(auth);
    // console.log(user?.photoURL);
    
    const authInfo = {
        user,
        loading,
        setLoading,
        setUser,    
        signIn,
        updateUserProfile,
        googleSignIn,
        githubSignIn,
        signUp
    }   

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;