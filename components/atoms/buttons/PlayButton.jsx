// components/PlayButton.js
import React from "react";

const PlayButton = () => {
  return (
    <div
      className="relative w-48 h-24 rounded-full bg-cover bg-center cursor-pointer mt-10"
      style={{ backgroundImage: "url('/images/product.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#3C43EB] opacity-20 rounded-full"></div>

      <div className="absolute inset-0 flex items-center justify-end px-2">
        <div className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-14 w-14 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.752 11.168l-5.197-3.027A1 1 0 008 9.027v5.946a1 1 0 001.555.832l5.197-3.027a1 1 0 000-1.664z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PlayButton;
