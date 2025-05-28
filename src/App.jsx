import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./About";
import Gallery from "./Gallery";
import Videos from "./Videos";
import Contact from "./Contact";


function Home() {
  return (
    <div className="min-h-screen font-sans animated-gradient">
      <Navbar />

      {/* Hero Section */}
      <div className="text-center py-10">
        <div className="w-72 h-72 mx-auto rounded-full overflow-hidden shadow-lg bg-white">
          <img
            src="/profile.jpg"
            alt="Ashi Sharma"
           className="w-full h-full object-contain transition-transform duration-500 ease-in-out transform hover:scale-125"
          />
        </div>
        <h1 className="text-4xl font-bold mt-6 text-green-700">Ashi Sharma</h1>
        <p className="text-lg text-gray-700 mt-2">Actor • Dancer • Creator • Student</p>
      </div>

      {/* Hero Image + About Me Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-7xl mx-auto px-6 mb-16 items-center">
        {/* Left Image (25%) */}
        <div className="lg:col-span-3 flex justify-center">
          <img src="/hero1.jpg" alt="Ashi" className="w-full max-w-xs aspect-square object-cover rounded-xl shadow-md" />
        </div>

        {/* About Me (50%) */}
        <div className="lg:col-span-6 text-center lg:text-left px-4 border-4 border-purple-400 rounded-xl shadow-xl bg-lavender bg-opacity-70 p-6">
          <h2 className="text-3xl font-semibold text-yellow-600 mb-4 text-center">About Me</h2>
          <p className="text-gray-800 text-base leading-relaxed">
            Hello! I’m Ashi, and I’ve always felt most at home when I’m moving or telling a story.
            As a 12 years old, I enjoy exploring characters through short films and skits, whether I’m quietly practicing
            a thoughtful monologue or experimenting with a lighthearted comedic bit.
            <br /><br />
            Dance has become another way for me to express myself: I love trying new styles, from jazz combos to simple hip-hop grooves,
            and seeing how movement can bring even small ideas to life.
            <br /><br />
            More than anything, I hope my videos and performances offer a little spark of joy. Behind the scenes, I’m often sketching new ideas
            with friends, jotting down song lyrics, or volunteering with community theater.
            <br /><br />
            Every audition, callback, rehearsal, or take teaches me something new—about creativity, teamwork, and staying positive in the moment. Thanks for stopping by—I'm so happy to share this journey with you.
          </p>
        </div>

        {/* Right Image (25%) */}
        <div className="lg:col-span-3 flex justify-center">
          <img src="/hero2.jpg" alt="Ashi" className="w-full max-w-xs aspect-square object-cover rounded-xl shadow-md" />
        </div>
      </div>

      {/* Featured Video */}
      <div className="max-w-3xl mx-auto p-4">
        <h2 className="text-2xl font-semibold text-yellow-600 mb-2">Featured Video</h2>
        <div className="aspect-w-32 aspect-h-32">
          <iframe
            className="w-full h-64"
            src="https://www.youtube.com/embed/SDUqB0Wtu6c?si=apaVNhCMZxfH6lqS"
            title="Featured YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/videos" element={<Videos />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
