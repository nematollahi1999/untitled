"use client";
import React, { useState } from "react";

const ExpandingGlassButtonWhite = ({ style, text, subtext, expandedWidth, onClick }) => {
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
      className={`transform scale-80 lg:scale-100 md:scale-100 absolute flex items-center transition-all duration-300 ease-in-out backdrop-blur-sm bg-black/30 ${
        isHovered || isActive ? expandedWidth : "w-12"
      } h-12 rounded-full cursor-pointer overflow-hidden`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={style}
    >
      <div
        className={`absolute flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ease-in-out`}
      >
        <svg
          className="flex items-center justify-center"
          width="12"
          height="12"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="14" height="14" rx="14" fill="white" />
        </svg>
      </div>
      <div
        className={`pl-10 pr-4 text-white transition-opacity duration-100 ease-in-out ${
          isHovered || isActive ? "opacity-100 delay-300" : "opacity-0"
        }`}
        onClick={onClick }
      >
        <div className="font-bold text-xs text-right">{text}</div>
        <div className="font-light text-xs text-right">{subtext}</div>
      </div>
    </div>
  );
};

export default ExpandingGlassButtonWhite;
