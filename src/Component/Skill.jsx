import React from "react";
import { Code, Database, Wrench } from "lucide-react";

function Skill() {
  return (
    <section className="skillPage w-full py-20 bg-white text-black">
      <div className="max-w-6xl mx-auto px-6">
       
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold tracking-tight text-black">
            My <span className="text-purple-600">Skills</span>
          </h2>
          <p className="text-gray-600 mt-3 text-lg">
            A blend of frontend, backend, and tools I use to build seamless
            digital experiences.
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          <div className="rounded-2xl p-8 shadow-xl border border-gray-100 bg-white 
            hover:shadow-2xl hover:-translate-y-2 transition duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-purple-100 rounded-xl">
                <Code className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold">Frontend</h3>
            </div>
            <ul className="space-y-2 text-gray-700 text-base">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Tailwind CSS</li>
              <li>React</li>
              <li>Next.js</li>
              <li>TypeScript</li>
            </ul>
          </div>

          
          <div className="rounded-2xl p-8 shadow-xl border border-gray-100 bg-white 
            hover:shadow-2xl hover:-translate-y-2 transition duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-purple-100 rounded-xl">
                <Database className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold">Backend</h3>
            </div>
            <ul className="space-y-2 text-gray-700 text-base">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>REST APIs</li>
            </ul>
          </div>

         
          <div className="rounded-2xl p-8 shadow-xl border border-gray-100 bg-white 
            hover:shadow-2xl hover:-translate-y-2 transition duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-purple-100 rounded-xl">
                <Wrench className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold">Tools & Others</h3>
            </div>
            <ul className="space-y-2 text-gray-700 text-base">
              <li>Git & GitHub</li>
              <li>Vercel</li>
              <li>VS Code</li>
              <li>Postman</li>
              <li>Figma (UI/UX)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
