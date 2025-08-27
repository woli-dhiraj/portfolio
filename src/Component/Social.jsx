import React from "react";
import { FaYoutube, FaInstagram, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

function Social() {
  const socials = [
    { name: "YouTube", icon: <FaYoutube />, url: "https://www.youtube.com/@wolidhiraj", color: "text-red-500" },
    { name: "Instagram", icon: <FaInstagram />, url: "https://www.instagram.com/dhiraj_woli/", color: "text-pink-500" },
    { name: "LinkedIn", icon: <FaLinkedin />, url: "https://www.linkedin.com/in/dhiraj-woli-01bbba329/", color: "text-blue-600" },
    { name: "Twitter", icon: <FaTwitter />, url: "https://x.com/wolidhiraj15", color: "text-sky-500" },
    { name: "GitHub", icon: <FaGithub />, url: "https://github.com/woli-dhiraj", color: "text-gray-800" },
  ];

  return (
    <section id="social" className="w-full bg-gray-50 py-12 px-6">
      <h2 className="text-2xl font-bold text-center mb-8">Connect with me</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white shadow-md rounded-xl px-5 py-3 hover:shadow-lg hover:scale-105 transition duration-300"
          >
            <span className={`${social.color} text-2xl`}>{social.icon}</span>
            <span className="font-medium">{social.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Social;
