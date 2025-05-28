import React from "react";
import Navbar from "./Navbar";


const videoList = [
  {
    type: "youtube",
    url: "https://www.youtube.com/embed/46hxmmJsxkQ?si=8lj6jOFyvGszzKCW",
  },
  {
    type: "tiktok",
    url: "https://www.tiktok.com/embed/v2/7497814192154512682",
  },
  {
    type: "instagram",
    url: "https://www.instagram.com/p/DIsXiEVp0Oq/embed",
  },
];

export default function Videos() {
return (
  <div className="bg-blue-50 min-h-screen pt-0 py-10 px-6 font-sans">
    <Navbar />
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">
        Ashi's Video Highlights
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {videoList.map((video, index) => (
          <div
            key={index}
            className="aspect-square bg-white rounded-xl overflow-hidden shadow-md flex items-center justify-center"
          >
            <iframe
              src={video.url}
              title={`Ashi video ${index + 1}`}
              className="w-full h-full object-contain"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  </div>
);

}
