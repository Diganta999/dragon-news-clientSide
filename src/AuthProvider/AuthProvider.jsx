import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../firebase.init';


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)    
    // googleSignIn
    const googleprovider = new GoogleAuthProvider();
    // githubSignIn
    const githubprovider = new GithubAuthProvider();

    const googleSignIn =() => {
         return signInWithPopup(auth, googleprovider);
    }

    const githubSignIn = () => {
        
        return signInWithPopup(auth, githubprovider);
    }   
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    });
    
    const authInfo = {
         user,
        loading,
        setLoading,
        setUser,    
        // createUser,
        // signIn,
        // logOut,
        // updateUserProfile,
         googleSignIn,
         githubSignIn,
        // facebookSignIn
    }   


    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;