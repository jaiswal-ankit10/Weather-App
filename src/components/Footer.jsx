import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-linear-to-r from-slate-900 to-slate-700 text-white py-10 ">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold mb-3">WeatherNow</h2>
          <p className="text-white/70 leading-relaxed">
            Simple, accurate, and real-time weather updates powered by modern
            APIs.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-white/80">
            <li className="hover:text-white transition">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-white transition">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-white transition">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Social Section */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-2xl text-white/80">
            <a href="#" className="hover:text-white transition">
              🌐
            </a>
            <a href="#" className="hover:text-white transition">
              🐦
            </a>
            <a href="#" className="hover:text-white transition">
              📸
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-white/60 border-t border-white/20 pt-4">
        © {new Date().getFullYear()} WeatherNow — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
