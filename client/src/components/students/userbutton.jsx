import {useState} from 'react'
import {useAuth} from '../../context/AuthContext'
import {auth} from '../../firebase/firebaseConfig'

const UserButton=()=>{
    const {user} =useAuth();
    const [showdropdown,setshowdropdown]=useState(false);
    const handle=()=>{
        auth.signOut();
        setshowdropdown(false);
    };
    return (
        <div>
            <img 
            src={user.photoURL}
            alt="profile"
            className="w-10 h-10 rounded-full cursor-pointer border-2 border-gray-400"
            onClick={()=>setshowdropdown(prev=>!prev)}
            title={user.displayName}
            />
            {showdropdown&&(
                <div className='absolute right-0 mt-2 w-40 bg-white shadow-md rounded-md'>
                <div className="px-4 py-2 text-sm text-gray-700 border-b">
{user.displayName}
                </div> 
                <button onClick={handle} className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                   Sign out
                </button> 
                </div>
            )}
        </div>
    )
}
export default UserButton