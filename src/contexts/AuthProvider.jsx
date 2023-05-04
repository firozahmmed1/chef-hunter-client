import React, { children, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.congfi";
import { createContext } from 'react';

export const AuthContext = createContext(null);

const googleProvider =new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const createUser =(email, password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password)
  }
  const logInUser =(email, password)=>{
    setLoading(true)
     return signInWithEmailAndPassword(auth, email, password)
  }
  const signInGoogle =()=>{
    setLoading(true)
      return signInWithPopup(auth, googleProvider)
  }
  const signInGitHub =()=>{
    setLoading(true)
    return signInWithPopup(auth, gitHubProvider)
  }
  
  const logOut =()=>{
    setLoading(true)
    return signOut(auth)
  }
  useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, (newsignInUser)=>{
           setUser(newsignInUser)
           setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
  },[])
    const authInfo ={
            user,
            loading,
            createUser,
            logInUser,
            signInGoogle,
            signInGitHub,
            logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
           {children} 
        </AuthContext.Provider>
    );
};

export default AuthProvider;