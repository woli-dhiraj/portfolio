import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { User, Mail, MessageSquare } from "lucide-react";
import toast from "react-hot-toast";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rbrzddn",   
        "template_d3btkbx",  
        form.current,
        "95IGjqCxyrWmuCvxx"   
      )
      .then(
        () => {
          toast.success(" Message Sent Successfully!", {
            duration: 3000, 
          });
          e.target.reset();
        },
        (error) => {
          toast.error(" Failed to send message. Try again.", {
            duration: 3000,
          });
          console.error(error.text);
        }
      );
  };

  return (
    <section id="contact" className="w-full min-h-screen bg-white text-black py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Get in <span className="text-purple-600">Touch</span>
          </h2>
          <p className="text-gray-600 mt-3">
            Have a project in mind or just want to say hi? Fill out the form below ✨
          </p>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white shadow-2xl rounded-2xl p-8 space-y-6 border border-gray-100"
        >
          <div className="relative">
            <User className="absolute top-3 left-3 text-gray-400" size={20} />
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-3 
                         focus:outline-none focus:ring-2 focus:ring-purple-500
                         hover:border-purple-400 transition"
            />
          </div>

          <div className="relative">
            <Mail className="absolute top-3 left-3 text-gray-400" size={20} />
            <input
              type="email"
              name="user_email"
              placeholder="your@email.com"
              required
              className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-3 
                         focus:outline-none focus:ring-2 focus:ring-purple-500
                         hover:border-purple-400 transition"
            />
          </div>

          <div className="relative">
            <MessageSquare className="absolute top-3 left-3 text-gray-400" size={20} />
            <textarea
              name="message"
              rows="5"
              placeholder="Write your message..."
              required
              className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-3 
                         focus:outline-none focus:ring-2 focus:ring-purple-500
                         hover:border-purple-400 transition"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer bg-gradient-to-r from-purple-600 to-purple-500 text-white py-3 rounded-lg font-medium
                       hover:from-purple-700 hover:to-purple-600 shadow-lg hover:shadow-purple-300 transition-all"
          >
            🚀 Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
