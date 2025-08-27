import React from "react";

function Project() {
  return (
    <section id="projects" className="w-full bg-white py-20 px-6" >
      <div className="max-w-6xl mx-auto text-center">
       
        <h2 className="text-4xl font-bold text-gray-900 mb-4">🚀 My Projects</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          I’m currently working on some exciting projects.  
          This section will showcase my work soon!
        </p>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl shadow-lg p-10 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300">
            <span className="text-5xl mb-4">⚡</span>
            <h3 className="text-xl font-semibold text-gray-800">Coming Soon</h3>
            <p className="text-gray-600 mt-2 text-sm">Exciting project in progress</p>
          </div>

          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-lg p-10 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300">
            <span className="text-5xl mb-4">💡</span>
            <h3 className="text-xl font-semibold text-gray-800">Innovations Loading</h3>
            <p className="text-gray-600 mt-2 text-sm">Stay tuned for updates</p>
          </div>

          <div className="bg-gradient-to-br from-purple-200 to-purple-300 rounded-2xl shadow-lg p-10 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300">
            <span className="text-5xl mb-4">🎯</span>
            <h3 className="text-xl font-semibold text-gray-800">Work in Progress</h3>
            <p className="text-gray-600 mt-2 text-sm">Projects will appear here soon</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
