import React from 'react';
import contact from "../assets/contact.png"

function Contact() {
  return (
    <>
      <div className="contactContainer h-screen w-screen  flex justify-center items-center">
        <div className="contactForm p-6 border-2 border-black rounded-xl bg-pink-100">
          <form className="flex gap-6 w-[70vw] h-[70vh] justify-between items-center px-30">
            <div className="left w-full flex flex-col justify-center items-start pt-20 h-full gap-4">
                <h1 className="text-4xl font-bold  text-center font-mono">READY TO TALK</h1>
                <img src={contact} alt="contact" className=' w-74' />

            </div>
           <div className="right w-full">
            
            <div className="field flex flex-col gap-2">
              <label htmlFor="name" className="font-semibold">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="border-2 border-black px-2 py-1"
              />
            </div>

            
            <div className="field flex flex-col gap-2">
              <label htmlFor="email" className="font-semibold">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
                className="border-2 border-black px-2 py-1 w-full"
              />
            </div>

         
            <div className="field flex flex-col gap-2">
              <label htmlFor="message" className="font-semibold">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Type your message..."
                className="border-2 border-black px-2 py-1"
              ></textarea>
            </div>

          
            <div className="btn flex justify-center items-center">
                <button
              type="submit"
              className="bg-black text-white px-4 cursor-pointer py-2 mt-4 rounded font-semibold hover:opacity-80"
            >
              Send Message
            </button>
            </div>
           </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
