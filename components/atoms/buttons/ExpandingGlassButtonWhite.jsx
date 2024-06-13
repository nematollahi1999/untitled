"use client";
import React, { useState } from "react";
import Arrow from "@/public/icons/Arrow";

const ExpandingGlassButtonWhite = ({ style, text, subtext, color }) => {
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
      className={`absolute flex items-center transition-all duration-300 ease-in-out backdrop-blur-sm bg-white/30 ${
        isHovered || isActive ? "w-40" : "w-8"
      } h-8 rounded-full cursor-pointer overflow-hidden`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={style}
    >
      <div
        className={`absolute flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ease-in-out ${
          isHovered || isActive ? "translate-x-0" : "translate-x-0"
        }`}
      >
        
        <Arrow
          className={'transition-all duration-150 ease-out'}
        />
      </div>
      <div
        className={`pl-14 text-white transition-opacity duration-100 ease-in-out ${
          isHovered || isActive ? "delay-300 opacity-100" : "opacity-0"
        }`}
      >
        <div className="font-bold text-xs text-right">{text}</div>
        <div className="font-light text-xs text-right ">{subtext}</div>
      </div>
    </div>
  );
};

export default ExpandingGlassButtonWhite;
