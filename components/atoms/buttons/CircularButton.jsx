"use client";
import React, { useState } from "react";

const CircularButton = ({ text, className, style }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`flex items-center justify-center text-sm ${className}`}
      style={style}
    >
      <div
        className={`relative flex items-center justify-around border-[2px] border-white transition-all duration-500 ease-in-out cursor-pointer ${
          hovered ? "w-24 h-6 rounded-full " : "w-6 h-6 rounded-full"
        }`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <span
          className={`absolute px-5 transition-opacity text-white duration-500 ease-in-out rounded-full ${
            hovered ? "opacity-100" : "opacity-0 "
          } whitespace-nowrap`}
        >
          {text}
        </span>

        <svg
          className={`transition-all duration-300 ease-in-out ${
            hovered ? 'hidden' : 'block'
          }`}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Iconly/Regular/Outline/Arrow - Right 2">
            <g id="Arrow - Right 2">
              <path
                id="Stroke 1"
                d="M7.96967 19.5305C7.7034 19.2642 7.6792 18.8475 7.89705 18.5539L7.96967 18.4698L14.439 12.0001L7.96967 5.53045C7.7034 5.26418 7.6792 4.84752 7.89705 4.55391L7.96967 4.46979C8.23594 4.20353 8.6526 4.17932 8.94621 4.39717L9.03033 4.46979L16.0303 11.4698C16.2966 11.7361 16.3208 12.1527 16.1029 12.4463L16.0303 12.5305L9.03033 19.5305C8.73744 19.8233 8.26256 19.8233 7.96967 19.5305Z"
                fill="white"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default CircularButton;
