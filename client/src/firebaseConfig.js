import {initializeApp} from 'firebase/app' 
import {getAuth,GoogleAuthProvider} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCTTTn85JIdO9MjqTRpHxW9cfzSNV9yA94",
  authDomain: "eduverse-899b3.firebaseapp.com",
  projectId: "eduverse-899b3",
  storageBucket: "eduverse-899b3.firebasestorage.app",
  messagingSenderId: "650470389616",
  appId: "1:650470389616:web:d45b27ecf6c5fdea5401b5",
  measurementId: "G-LWNHGXP9HL"
};

const app=initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const googleProvider=new GoogleAuthProvider()