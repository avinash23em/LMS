import { useState,useEffect} from 'react'
import Googlelogin from '../components/googlelogin'
import {useAuth} from '../context/AuthContext.jsx'


const Create = ({ onClose }) => {
  const {user}=useAuth();

  useEffect(()=>{
if(user){
  onClose();
}
  },[user,onClose]);
  return (
    
  <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 border-b">
    
    <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm">
      <h2 className="text-xl font-bold mb-4">Sign in</h2>

      
     {!user&& <Googlelogin />}

      
      <button
        className="mt-4 text-sm text-gray-600 hover:text-black"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  </div>
  
  );
};

export default Create;
