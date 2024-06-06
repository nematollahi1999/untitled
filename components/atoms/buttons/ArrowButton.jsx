"use client";
import React, { useState } from "react";
import Arrow from "@/public/icons/Arrow";

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
          className={`absolute transition-opacity text-white duration-300 ease-in-out rounded-full ${
            hovered ? "opacity-100" : "opacity-0 "
          } whitespace-nowrap`}
        >
          {text}
        </span>
        <Arrow
          className={`transition-all duration-150 ease-out  ${
            hovered ? "hidden" : "block"
          }`}
        />
      </div>
    </div>
  );
};

export default CircularButton;
