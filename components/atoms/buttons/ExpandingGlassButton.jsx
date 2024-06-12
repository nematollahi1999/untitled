"use client";
import React, { useState } from "react";

const ExpandingGlassButton = ({ style, text, subtext, color }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleMouseEnter = () => {
    if (!isActive) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isActive) {
      setIsHovered(false);
    }
  };

  const handleClick = () => {
    setIsActive(!isActive);
    setIsHovered(!isActive); // Keep the button expanded when clicked
  };

  return (
    <div
      className={`relative flex items-center transition-all duration-300 ease-in-out backdrop-blur-sm bg-${color}/30 ${
        isHovered || isActive ? "w-40" : "w-12"
      } h-12 rounded-full cursor-pointer overflow-hidden`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={style}
    >
      <div
        className={`absolute flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ease-in-out ${
          isHovered || isActive ? "translate-x-0" : "translate-x-0"
        }`}
      >
        <svg
          className="w-6 h-6 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </div>
      <div
        className={`pl-14 text-white transition-opacity duration-100 ease-in-out ${
          isHovered || isActive ? "delay-300 opacity-100" : "opacity-0"
        }`}
      >
        <div className="font-black text-sm text-right">{text}</div>
        <div className="font-light text-sm text-right ">{subtext}</div>
      </div>
    </div>
  );
};

export default ExpandingGlassButton;
