"use client";
import React, { useState } from "react";
import Image from "next/image";

const VideoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm">
      <div className="relative w-full max-w-3xl mx-4">
        <video
          controls
          autoPlay
          className="w-full rounded-xl shadow-lg"
        >
          <source src="/videos/award.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-white text-black rounded-full px-3 py-1 text-sm hover:bg-gray-200"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

const AwardVideoSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold mb-4 text-purple-400">
       Golden Memory from the Stage
      </h3>

      <div
        onClick={() => setOpen(true)}
        className="relative cursor-pointer max-w-md mx-auto rounded-xl overflow-hidden shadow-md group transition duration-300 hover:scale-[1.02]"
      >
        <Image
          src="/videos/award-poster.jpg"
          alt="Click to watch award video"
          width={600}
          height={350}
          className="w-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-lg font-semibold">
            ▶ Click to watch the video
          </p>
        </div>
      </div>

      <VideoModal isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default AwardVideoSection;
