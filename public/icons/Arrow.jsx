import React from "react";
import "@/styles/CircularButton.css";

export default function Arrow({ className }) {
  return (
    <svg
      className={`${className} animate-beat flex items-center justify-center`}
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="10" height="10" rx="10" fill="white" />
    </svg>
  );
}
