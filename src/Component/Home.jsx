import React from "react";
import profileImage from "../assets/pfp.jpg";
import resumeFile from "../assets/download/ResumeDhirajWoli.pdf";

const Home = () => {
  return (
    <main className="w-full min-h-screen flex items-center" id="home">
      <div className="w-[90vw] mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
        
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
          <h1 className="text-lg md:text-xl">Hey, I'm Dhiraj👋🏻</h1>
          <div className="mt-2">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight my-2">
              <span className="text-purple-500">FULLSTACK</span> <br />
              DEVELOPER
            </h1>
          </div>
          <p className="text-base md:text-xl text-gray-600">
            Turning ideas into smooth, interactive digital experiences <br className="hidden md:block" />
            with clean design and efficient code.
          </p>

          
          <div className="flex gap-4 justify-center md:justify-start mt-6">
            <a href="#contact">
              <button className="px-6 py-2 bg-black  text-white rounded-md shadow-lg hover:bg-purple-600 transition cursor-pointer">
                Get In Touch
              </button>
            </a>

            <a
              href={resumeFile}
              download="Dhiraj_Woli_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-6 py-2 border border-black rounded-md shadow-lg hover:bg-gray-100 transition cursor-pointer">
                Resume
              </button>
            </a>
          </div>
        </div>

        
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="h-56 w-56 md:h-80 md:w-80 rounded-full border border-gray-400 flex justify-center items-center">
            <div className="h-[90%] w-[90%] rounded-full overflow-hidden bg-gray-200">
              <img
                src={profileImage}
                alt="profile"
                className="h-full w-full object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
