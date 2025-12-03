import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-linear-to-r from-emerald-400 to-cyan-400 shadow z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-5 px-4">
        {/* Logo */}
        <div className="logo font-bold text-2xl text-white">WeatherNow</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-white font-medium">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-3xl text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-linear-to-r from-emerald-500 to-cyan-500 text-white overflow-hidden transition-all duration-300 ${
          open ? "max-h-40" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-4 py-4 px-6 text-lg font-medium">
          <li onClick={() => setOpen(false)}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={() => setOpen(false)}>
            <Link to="/about">About</Link>
          </li>
          <li onClick={() => setOpen(false)}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
