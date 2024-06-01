"use client";
import { useState } from "react";
import "@/styles/animated-button.css";

export default function AnimatedButton({ className, style, tooltip }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`relative flex items-center justify-center w-40 h-40 ${className}`}
      style={style}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <button
        className={`absolute glow-on-hover `}
      ></button>
      {/* Tooltip */}
      <div className={`tooltip ${hover ? 'show' : ''}`}>
        {tooltip}
      </div>
    </div>
  );
}