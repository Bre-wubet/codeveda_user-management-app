import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="bg-white/80 backdrop-blur-sm shadow-md mx-2 md:mx-4 lg:mx-6 my-2 rounded-xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link to="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
                MyApp
              </Link>
            </div>
            
            <div className="hidden md:flex md:items-center md:gap-4">
              {user ? (
                <>
                  <span className="text-gray-700">Hi, {user.username}</span>
                  <button
                    onClick={logout}
                    className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="text-gray-700 hover:text-indigo-600 transition-colors px-3 py-2 rounded-md">
                    Login
                  </Link>
                  <Link to="/register" className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all">
                    Register
                  </Link>
                </>
              )}
            </div>
            
            <div className="md:hidden flex items-center">
              <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {user ? (
              <>
                <div className="px-3 py-2 text-gray-700">Hi, {user.username}</div>
                <button
                  onClick={() => { logout(); setMobileMenuOpen(false); }}
                  className="w-full text-left bg-gradient-to-r from-red-500 to-pink-500 text-white block px-3 py-2 rounded-md font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:bg-gray-50 block px-3 py-2 rounded-md font-medium">
                  Login
                </Link>
                <Link to="/register" onClick={() => setMobileMenuOpen(false)} className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white block px-3 py-2 rounded-md font-medium">
                  Register
                </Link>
              </>
            )}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
