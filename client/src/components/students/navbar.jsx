import React from 'react'
import {assets} from '../../assets/assets.js'
import {Link} from 'react-router-dom'

const Navbar=()=>{
    const iscrlist=location.pathname.includes('/course-list')
    return (
        <div className={`flex items-center justify-between p-5 sm:px-10 md:px-14 lg:px-30 border-b border-gray-500 py-3 ${
	iscrlist ? "bg-white" : "bg-cyan-100/70"
}`}
>
<img src={assets.logo} alt="logo" className="w-28 lg:w-32 cursor-pointer"/>
<div className="">
    <button className="primary_btn">Create Account</button>
</div>
<div className='md:hidden flex items-center sm:gap-5 text-gray-500'>
<div>
    <button>Become Educator</button>
    | <Link to='/my-enrollements'>My Enrollements</Link>
</div>
</div>
        </div>
    )
}

export default Navbar