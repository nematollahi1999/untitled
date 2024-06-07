import React from "react";
import "@/styles/CircularButton.css";

export default function Arrow({ className }) {
  return (
    <svg
      className={`${className} animate-beat`}
      width="6"
      height="6"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="20" height="20" rx="10" fill="white" />
    </svg>
  );
}
