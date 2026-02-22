import React from "react";
import { FaYoutube, FaInstagram, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-gray-100 text-gray-700 py-10 px-6 mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
       
        <div>
          <h2 className="text-2xl font-bold text-purple-600">Dhiraj</h2>
          <p className="text-sm mt-3 text-gray-600">
            Building modern web experiences with React, Next.js, and MERN stack.
          </p>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#home" className="hover:text-purple-600 cursor-pointer">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-purple-600 cursor-pointer">About</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-purple-600 cursor-pointer">Projects</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-purple-600 cursor-pointer">Contact</a>
            </li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Me</h3>
          <div className="flex gap-5 text-2xl">
            <a href="https://www.youtube.com/@wolidhiraj" target="_blank" rel="noreferrer" className="hover:text-red-500">
              <FaYoutube />
            </a>
            <a href="https://www.instagram.com/dhiraj_woli/" target="_blank" rel="noreferrer" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/dhiraj-woli-01bbba329/" target="_blank" rel="noreferrer" className="hover:text-blue-600">
              <FaLinkedin />
            </a>
            <a href="https://github.com/woli-dhiraj" target="_blank" rel="noreferrer" className="hover:text-gray-900">
              <FaGithub />
            </a>
            <a href="https://x.com/wolidhiraj15" target="_blank" rel="noreferrer" className="hover:text-blue-400">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

     
      <div className="border-t border-gray-300 mt-10 pt-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Dhiraj Woli. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
