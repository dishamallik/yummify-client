import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();

  const { user, isAuthenticated } = useAuth0();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  


  return (
    <div>
      <div className="w-full h-24 bg-black text-white flex items-center lg:justify-center relative  justify-between">
      <h1 className="lg:text-5xl text-4xl p-5 lg:text-center font-merienda">Yummify</h1>

      {!isAuthenticated ? (
        <button
          className="absolute right-5 p-2 font-bold hover:text-yellow-500"
          onClick={() => loginWithRedirect()}
        >
          Sign Up / Login
        </button>
      ) : (
        <div className="absolute right-5 flex items-center">
          {/* Profile Picture */}
          <div className="relative">
            <img
              className="w-12 h-12 rounded-full cursor-pointer border-2 border-white hover:shadow-lg"
              src={user.picture}
              alt={user.name}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
            
            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg py-2">
                <div className="px-4 py-2">
                  <h2 className="text-sm font-semibold">{user.name}</h2>
                  <p className="text-xs text-gray-600">{user.email}</p>
                </div>
                <hr />
                <button
                  className="w-full text-left px-4 py-2 text-sm font-bold text-red-500 hover:bg-red-100"
                  onClick={() => {
                    setDropdownOpen(false);
                    logout({ logoutParams: { returnTo: window.location.origin } });
                  }}
                >
                  Log Out
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>

    <nav className="bg-black text-white lg:px-20 md:px-10 sm:px-5 py-3 lg:flex lg:items-center lg:justify-between border-y-2 border-b-gray-50">
      {/* Left Side: Routes */}
      <div className="flex justify-between items-center">
        <div className="lg:flex lg:space-x-6">
          <NavLink
            to="/"
            className="block px-2 py-1 rounded-md hover:bg-gray-700"
            activeClassName="bg-gray-700"
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className="block px-2 py-1 rounded-md hover:bg-gray-700"
            activeClassName="bg-gray-700"
          >
            Recipes
          </NavLink>
          <NavLink
            to="/about"
            className="block px-2 py-1 rounded-md hover:bg-gray-700"
            activeClassName="bg-gray-700"
          >
            About
          </NavLink>
         
          <NavLink
            to="/blog"
            className="block px-2 py-1 rounded-md hover:bg-gray-700"
            activeClassName="bg-gray-700"
          >
           Blogs
          </NavLink>
        </div>
      </div>

      {/* Right Side: Search Bar */}
      <div className="mt-3 lg:mt-0">
        <input
          type="text"
          placeholder="Search..."
          className="w-full lg:w-64 px-3 py-2 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
