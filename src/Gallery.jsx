import React from "react";
import Navbar from "./Navbar";

const images = [
  "/gallery1.jpg",
  "/gallery2.jpg",
  "/gallery3.jpg",
  "/gallery4.jpg",
  "/gallery5.jpg",
  "/gallery6.jpg",
  "/gallery7.jpg",
  "/gallery8.jpg",
  "/gallery9.jpg",
  "/gallery10.jpg",
  "/gallery11.jpg",
  "/gallery12.jpg",
  "/gallery13.jpg",
  "/gallery14.jpg",
  "/gallery15.jpg",
  "/gallery16.jpg",
  "/gallery17.jpg",
  "/gallery18.jpg",
  "/gallery19.jpg",
  "/gallery20.jpg",
  "/gallery21.jpg"
];

export default function Gallery() {
  return (
   
    <div className="bg-pink-100 min-h-screen pt-0 py-10 px-6 font-sans">
      <Navbar />
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">
          Photo Gallery
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <a href={src} target="_blank" rel="noopener noreferrer" key={index}>
            <img
            src={src}
              alt={`Gallery ${index + 1}`}
            className="w-full h-64 object-contain bg-gray-100 rounded-xl shadow-md hover:scale-105 transition-transform"
             />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
