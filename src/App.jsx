import React from "react";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Skill from "./Component/Skill";
import Contact from "./Component/Contact";
import Social from "./Component/Social";
import Project from "./Component/Project";
import Footer from "./Component/Footer";
import About from "./Component/About";


import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Project />
      <Social />
      <Contact />
      <Footer />

     
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            background: "#fff",
            color: "#333",
            borderRadius: "12px",
            padding: "12px 16px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          },
          success: {
            iconTheme: {
              primary: "#9333ea", 
              secondary: "#fff",
            },
          },
        }}
      />
    </>
  );
};

export default App;
