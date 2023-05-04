import React, { children, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.congfi";
import { createContext } from 'react';

export const AuthContext = createContext(null);

const googleProvider =new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  
  const createUser =(email, password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
  }
  const logInUser =(email, password)=>{
     return signInWithEmailAndPassword(auth, email, password)
  }
  const signInGoogle =()=>{
      return signInWithPopup(auth, googleProvider)
  }
  const signInGitHub =()=>{
    return signInWithPopup(auth, gitHubProvider)
  }
  
  useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, (newsignInUser)=>{
           setUser(newsignInUser)
        })
        return ()=>{
            unsubscribe()
        }
  },[])
    const authInfo ={
            user,
            createUser,
            logInUser,
            signInGoogle,
            signInGitHub
    }

    return (
        <AuthContext.Provider value={authInfo}>
           {children} 
        </AuthContext.Provider>
    );
};

export default AuthProvider;