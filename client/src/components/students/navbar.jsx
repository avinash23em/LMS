import React from 'react'
import {assets} from '../../assets/assets.js'
import {Link} from 'react-router-dom'

const Navbar = () => {
  const iscrlist = location.pathname.includes("/course-list");
  return (
    <div
      className={`flex items-center justify-between p-5 sm:px-10 md:px-14 lg:px-30 border-b border-gray-500 py-3 ${
        iscrlist ? "bg-white" : "bg-blue-50"
      }`}
    >
      <img
        src={assets.logo}
        alt="logo"
        className="w-28 lg:w-32 cursor-pointer"
      />

      <div className="flex gap-5 items-center">
      <div>
        <button className="text-black hover:border border-black px-6 py-2 rounded-full transition duration-300 ease-in-out">Become Educator</button>
        <Link to="/my-enrollements" className="text-black hover:border border-black px-6 py-2 rounded-full transition duration-300 ease-in-out">
          My Enrollements
        </Link>
        </div>

        <button className="primary_btn">Create Account</button>
      </div>
      <div className="md:hidden flex items-center sm:gap-5 text-gray-500">
        <div>
          <button className="">
            Become Educator
          </button>
          |
          <Link
            to="/my-enrollements"
            className=""
          >
            My Enrollements
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
