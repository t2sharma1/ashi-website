import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-8 py-4 bg-green-900 text-white shadow-md">
      <div className="space-x-4 text-md">
        <Link to="/" className="hover:text-yellow-300">Home</Link>
        <Link to="/about" className="hover:text-yellow-300">My Story</Link>
        <Link to="/gallery" className="hover:text-yellow-300">Gallery</Link>
        <Link to="/videos" className="hover:text-yellow-300">Videos</Link>
        <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
      </div>
      <div className="flex gap-4">
        <a href="https://www.youtube.com/@Radiantashilife" target="_blank" rel="noreferrer">
          <img src="/youtube.png" alt="YouTube" className="w-6 h-6 hover:scale-110 transition-transform" />
        </a>
        <a href="https://www.instagram.com/ashi.rma" target="_blank" rel="noreferrer">
          <img src="/instagram.png" alt="Instagram" className="w-6 h-6 hover:scale-110 transition-transform" />
        </a>
        <a href="https://www.tiktok.com/@ashi_.rma1" target="_blank" rel="noreferrer">
          <img src="/tiktok.png" alt="TikTok" className="w-6 h-6 hover:scale-110 transition-transform" />
        </a>
        <a href="https://www.imdb.com/name/nm14321521/" target="_blank" rel="noreferrer">
          <img src="/imdb.svg"   // or .png if that's what you saved
          alt="IMDb"
          className="h-6 hover:scale-110 transition-transform object-contain"
         />
        </a>
      </div>
    </div>
  );
}
