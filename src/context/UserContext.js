import {
    FacebookAuthProvider,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
  } from "firebase/auth";
  import React, { createContext, useEffect, useState } from "react";
  import app from '../firebase/firebase.config';

  export const UserData = createContext();
  
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider()
  const facebookProvider = new FacebookAuthProvider()
  
  const UserContext = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    const signInUser = (email, password) => {
      setLoading(false)
      return signInWithEmailAndPassword(auth, email, password);
    };
  
    const googleSignIn = () => {
      return signInWithPopup(auth, googleProvider)
    }
  
    const facebookSignIn = () => {
      return signInWithPopup(auth, facebookProvider)
    }
  
    const updateUserInfo = (profile) => {
      return updateProfile(auth.currentUser, profile)
    }
  
    const logOut = () => {
      return signOut(auth)
    }
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (loginUser) => {
        setUser(loginUser);
        setLoading(false)
        // console.log(loginUser);
      });
      return () => {
        unsubscribe();
      };
    }, []);
  
    const [user, setUser] = useState();
    const authInfo = { user, updateUserInfo, createUser, signInUser, googleSignIn, facebookSignIn, logOut, loading };
    return (
      <div>
        <UserData.Provider value={authInfo}>{children}</UserData.Provider>
      </div>
    );
  };
  
  export default UserContext;
  