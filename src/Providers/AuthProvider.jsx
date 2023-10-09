import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext= createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider();

    const [user,setUser]= useState(null);
    const [loading,setLoading]= useState(true);
    
    const register=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const login=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const googleLogin=()=>{
        return signInWithPopup(auth,googleProvider);
    }

    const logout=()=>{
        return signOut(auth);
    }

    const profileUpdate=(name, imageURL)=>{
        setLoading(true);
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: imageURL,
        })
    }

    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            unSubscribe();
        }
    },[])

    const AuthInfo={
        user,
        register,
        login,
        loading,
        profileUpdate,
        logout,
        setLoading,
        googleLogin,
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;