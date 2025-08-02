import { auth, googleProvider } from '../firebase/firebaseConfig';
import { signInWithPopup } from 'firebase/auth';



const Googlelogin = () => {
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("Signed in as:", user.displayName);
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  return (
    <button
      onClick={handleGoogleSignIn}
      className="w-full bg-white border border-gray-300 py-2 rounded-md text-black hover:bg-gray-100"
    >
      Sign in with Google
    </button>
  );
};

export default Googlelogin;
