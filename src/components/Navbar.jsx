// import React, { useState } from 'react';
import { Film, Clapperboard, Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const getActive = ({isActive}) =>
    isActive
      ? "text-red-500 font-semibold border-b-2 border-red-500 pb-1 transition duration-200"
      : "text-gray-300 hover:text-red-500 transition duration-200";
  return (
    <nav className="bg-gray-900/90 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50 px-4 md:px-8 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* 1. Brand Logo / Name */}
        <NavLink to="/" className="flex items-center gap-2 group">
          <div className="bg-red-600 text-white p-2 rounded-xl group-hover:bg-red-700 transition duration-200">
            <Film className="w-6 h-6" />
          </div>
          <span className="text-2xl font-bold tracking-wide bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent">
            CineFlix
          </span>
        </NavLink>

        {/* 2. Navigation Links (Desktop) */}
        <ul className="hidden md:flex items-center gap-8 text-gray-300 font-medium">
          <li>
            <NavLink to="/" className={getActive}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/MovieListing" className={getActive}>
              Movie Listing
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className={getActive}>
              Movies
            </NavLink>
          </li>
        </ul>

        {/* 3. Prominent Button for Movie Listing Page & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <NavLink
            to="/movies"
            className="relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-600 shadow-lg shadow-red-600/30 hover:shadow-red-600/50 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <Clapperboard className="w-4 h-4" />
            <span>Explore Movies</span>
          </NavLink>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white p-1 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-gray-800 space-y-3 text-center flex flex-col">
          <NavLink to="/" className={getActive}>
            Home
          </NavLink>
          <NavLink to="/MovieListing" className={getActive}>
            Movie Listing
          </NavLink>
          <NavLink to="/movies" className={getActive}>
            Movies
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
