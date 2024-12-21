import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white w-full flex relative items-center mx-auto px-8 h-16 shadow-md">
      <div className="flex items-center justify-between w-full">
        {/* Brand or Logo Section */}
        <div className="text-black font-bold text-xl">
        {/* <img
          src="/images/logo-png.png"
          alt="Logo"
          className="h-20 w-auto" // Adjust height/width as needed
        /> */}
           <a href="#">UIN</a>
        </div>

        {/* Navbar Links */}
        <div className="hidden md:block w-full">
          <ul className="flex justify-end items-center space-x-8">
            <li><a href="#" className="text-md font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out">Home</a></li>
            <li><a href="#" className="text-md font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out">About</a></li>
            <li><a href="#" className="text-md font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out">Services</a></li>
            <li><a href="#" className="text-md font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out">Contact</a></li>
          </ul>
        </div>

        {/* Hamburger Menu Button */}
        <div className="md:hidden">
          <button className="outline-none mobile-menu-button">
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="mobile-menu hidden md:hidden">
        <ul className="mt-4 space-y-4">
          <li><a href="#" className="block px-4 py-2 text-black bg-gray-100 rounded hover:bg-gray-200">Home</a></li>
          <li><a href="#" className="block px-4 py-2 text-black bg-gray-100 rounded hover:bg-gray-200">About</a></li>
          <li><a href="#" className="block px-4 py-2 text-black bg-gray-100 rounded hover:bg-gray-200">Services</a></li>
          <li><a href="#" className="block px-4 py-2 text-black bg-gray-100 rounded hover:bg-gray-200">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;