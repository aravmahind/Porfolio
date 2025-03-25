import React from "react";
import logo from "../assets/AM_logo-removebg-preview.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-10 text-white p-4 w-[100%] shadow-md backdrop-filter h-16 backdrop-blur-2xl">
      <div className="container mx:auto flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-12 mr-3 rounded-full border-white"/>
          {/* <h1 className="text-2xl font-bold hover:text-gray-400 transition duration-300">Arav Mahind</h1> */}
        </div>

        {/* Menu */}
        <ul className="hidden md:flex space-x-8">
          <li className="hover:text-gray-400 transition duration-300">Home</li>
          <li className="hover:text-gray-400 transition duration-300">Projects</li>
          <li className="hover:text-gray-400 transition duration-300">About</li>
          <li className="hover:text-gray-400 transition duration-300">Contact</li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white text-3xl">☰</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
