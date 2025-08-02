import {createContext,useContext,useEffect,useState} from 'react';

import {onAuthStateChanged} from "firebase/auth";
import {auth} from '../firebase/firebaseConfig'

const AuthContext=createContext();

export const AuthProvider=({children})=>{
    const [user,setuser]=useState(null);
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setuser(currentUser);
        });
        return ()=>unsubscribe();
    },[]);
    return (
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth=()=>useContext(AuthContext);