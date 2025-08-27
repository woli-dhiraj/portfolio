import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white text-black sticky top-0 z-50 shadow-md">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12 py-4">
        
        {/* Logo */}
        <div className="logo text-xl md:text-2xl font-semibold tracking-wider">
          DHIRAJ
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li className="cursor-pointer hover:text-purple-600 transition">
            <a href="#home">Home</a>
          </li>
          <li className="cursor-pointer hover:text-purple-600 transition">
            <a href="#about">About</a>
          </li>
          <li className="cursor-pointer hover:text-purple-600 transition">
            <a href="#projects">Projects</a>
          </li>
          <li className="cursor-pointer hover:text-purple-600 transition">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden block text-black"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* Glassmorphism Mobile Menu */}
      <div
        className={`fixed top-6 right-6 w-64 h-auto rounded-2xl backdrop-blur-sm bg-white/30 shadow-lg p-6
          transform transition-transform duration-300 ease-in-out z-50
          ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
      >
        {/* Close Button (aligned top-right inside card) */}
        <div className="flex justify-end">
          <button
            onClick={() => setIsOpen(false)}
            className="text-black hover:text-purple-600 transition"
          >
            <X size={26} />
          </button>
        </div>

        {/* Sidebar Links */}
        <ul className="flex flex-col items-start gap-5 mt-4 text-lg font-medium text-black">
          <li>
            <a href="#home" onClick={() => setIsOpen(false)} className="hover:text-purple-600">Home</a>
          </li>
          <li>
            <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-purple-600">About</a>
          </li>
          <li>
            <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-purple-600">Projects</a>
          </li>
          <li>
            <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-purple-600">Contact</a>
          </li>
        </ul>
      </div>

      {/* Background Blur Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 backdrop-blur-[2px] bg-black/10 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </header>
  );
}

export default Navbar;
