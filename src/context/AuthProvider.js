import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null)
    const [loading,setLoading] =useState(true)

    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    
    const providerLogin =(provider)=>{
        return signInWithPopup(auth,provider)
    }
    const logOut = () =>{
        return signOut(auth)
    }

    const updateUser = (userInfo) =>{
        return updateProfile(auth.currentUser,userInfo)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
            
        })
            return ()=>{
                return unsubscribe();
            }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        providerLogin,
        updateUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;