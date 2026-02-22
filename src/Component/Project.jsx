import React from "react";

function Project() {
  return (
    <section id="projects" className="w-full bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">🚀 My Projects</h2>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          <article className="w-full max-w-md bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl shadow-lg overflow-hidden hover:translate-y-1 transition-transform duration-200">
            <div className="relative">
              <img src="/project.png" alt="MovieDex thumbnail" className="w-full h-44 object-cover" />
            </div>
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold text-gray-900">MovieDex – Movie Discovery Web App</h3>
              <p className="text-gray-600 mt-3 text-sm">MovieDex is a modern movie discovery web app that enables searching and exploring movies and TV shows with real-time data, detailed information, and a responsive, clean interface.</p>

              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-xs bg-white/70 text-gray-700 px-2 py-1 rounded">React / Next.js</span>
                <span className="text-xs bg-white/70 text-gray-700 px-2 py-1 rounded">Tailwind CSS</span>
                <span className="text-xs bg-white/70 text-gray-700 px-2 py-1 rounded">TMDB API</span>
                <span className="text-xs bg-white/70 text-gray-700 px-2 py-1 rounded">Vercel</span>
              </div>

              <div className="mt-6">
                <a href="https://moviedexapp.vercel.app/" target="_blank" rel="noreferrer" className="px-4 py-2 bg-purple-600 text-white rounded-md shadow hover:bg-purple-700 transition">Live Demo</a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Project;
