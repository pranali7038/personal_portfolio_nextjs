"use client";
import React from "react";

const CertificateModal = ({ imageUrl, onClose }) => {
  return (
<div className="fixed inset-0 z-50 flex items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 via-black to-blue-900 bg-opacity-90 backdrop-blur-md">
      <div className="bg-[#1f1f1f] rounded-xl p-4 max-w-md w-full relative shadow-lg">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-400 hover:text-white text-2xl font-bold"
        >
          X
        </button>

        {/* Certificate Content */}
        <img
          src={imageUrl}
          alt="Certificate"
          className="w-full h-auto rounded-lg object-contain"
        />
      </div>
    </div>
  );
};

export default CertificateModal;
