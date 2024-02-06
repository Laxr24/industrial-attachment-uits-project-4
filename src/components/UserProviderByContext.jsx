import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase/firebase.config";

export const userContext = createContext(null);

const UserProviderByContext = ({children}) => {

    const [user, setUser] = useState(null);

    const createUser = (emailField, passwordField) => {
       return createUserWithEmailAndPassword(auth, emailField, passwordField)
    }

    const emailVerification = (users) =>{
        return sendEmailVerification(users)
    }
    
    const singInUser = (email , password) =>{
        return signInWithEmailAndPassword(auth, email , password)
    }

    const passwordReset = (validEmail) =>{
        return sendPasswordResetEmail(auth, validEmail)
    }

    const userLogOut = () => {
        return signOut (auth)
    }

    useEffect (()=>{
        const unSubscribe = onAuthStateChanged (auth, (currentUser) =>{
            setUser(currentUser)
        })
        return () =>{
            unSubscribe;
        }
    }, [])

    const userInfo = {
        user, 
        createUser,
        singInUser,
        emailVerification,
        passwordReset,
        userLogOut
    }

    return (
        
        <userContext.Provider value={userInfo}>
            {children}
        </userContext.Provider>
    );
};

export default UserProviderByContext;