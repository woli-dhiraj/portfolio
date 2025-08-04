import React from "react";

function Navbar() {
  return (
    <>
      <header className="h-[12vh] w-full flex justify-center items-center fixed top-2.5 [text-shadow:0px_0px_10px_white]
">
        <div
          className="navbar bg-[rgba(0,0,0,0.2)] backdrop-blur-md  h-[90%] w-[80%] 
        m-auto flex items-center rounded-4xl justify-between
        px-10 py-3"
        >
          <div className="logo text-2xl font-bold font-mono">DHIRAJ</div>
          <div className="navList flex list-none gap-10">
            <li className="cursor-pointer hover:scale-105 duration-200 hover:text-purple-200">Home</li>
            <li className="cursor-pointer hover:scale-105 duration-200 hover:text-purple-200">About</li>
            <li className="cursor-pointer hover:scale-105 duration-200 hover:text-purple-200" >Contact</li>
            <li className="cursor-pointer hover:scale-105 duration-200 hover:text-purple-200">Project</li>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
