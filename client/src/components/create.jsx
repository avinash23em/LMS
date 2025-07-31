import { useState } from 'react'
import Googlelogin from '../components/googlelogin'


const Create = ({ onClose }) => {
  return (
    // full-screen semi-transparent background
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      {/* center box */}
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4">Sign in</h2>

        {/* Google Sign-In Button */}
        <Googlelogin />

        {/* Close Button */}
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
