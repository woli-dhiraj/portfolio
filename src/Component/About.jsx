import React from "react";
import { Code2, Trophy, Palette, BookOpen } from "lucide-react";

function About() {
  return (
    <section id="about" className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
       
        <div className="grid grid-cols-2 gap-6">
          <div className="p-6 bg-purple-50 rounded-2xl shadow-md text-center hover:shadow-xl transition">
            <Code2 className="w-10 h-10 text-purple-600 mx-auto" />
            <h3 className="mt-3 font-semibold text-gray-800">Coding</h3>
            <p className="text-sm text-gray-600">
              Love building web apps & exploring new tech.
            </p>
          </div>

          <div className="p-6 bg-blue-50 rounded-2xl shadow-md text-center hover:shadow-xl transition">
            <Trophy className="w-10 h-10 text-blue-600 mx-auto" />
            <h3 className="mt-3 font-semibold text-gray-800">Football</h3>
            <p className="text-sm text-gray-600">
              Playing & following football keeps me active and inspired.
            </p>
          </div>

          <div className="p-6 bg-pink-50 rounded-2xl shadow-md text-center hover:shadow-xl transition">
            <Palette className="w-10 h-10 text-pink-600 mx-auto" />
            <h3 className="mt-3 font-semibold text-gray-800">Design</h3>
            <p className="text-sm text-gray-600">
              Experimenting with UI/UX ideas and aesthetics.
            </p>
          </div>

          <div className="p-6 bg-green-50 rounded-2xl shadow-md text-center hover:shadow-xl transition">
            <BookOpen className="w-10 h-10 text-green-600 mx-auto" />
            <h3 className="mt-3 font-semibold text-gray-800">Learning</h3>
            <p className="text-sm text-gray-600">
              Always curious, always exploring new knowledge.
            </p>
          </div>
        </div>

       
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Hi, I’m <span className="font-semibold text-purple-600">Dhiraj Woli</span>, 
            a <span className="font-medium">BSc IT student</span> passionate about technology, 
            problem-solving, and creativity.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Outside of academics, I enjoy coding side projects, playing football, 
            and coming up with unique design ideas. I believe in learning by doing 
            and pushing myself to improve every day.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
