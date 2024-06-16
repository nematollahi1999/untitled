"use client";
// components/molecules/cards/SingleLinkCard.js
import React, { useState } from "react";

const SingleLinkCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const cardStyle = {
    position: "relative",
    backgroundColor: isHovered ? "#A5A8F2" : "#EBEBF6", // Lighter color on hover
    borderTopRightRadius: "45px",
    borderTopLeftRadius: "45px",
    borderBottomRightRadius: "45px",
    borderBottomLeftRadius: "45px",
    overflow: "hidden", // Ensure content stays within rounded corners
    transition: "background-color 0.1s ease-in-out", // Smooth transition on hover
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(60, 67, 235, 0.5)", // Semi-transparent blue overlay
    opacity: isHovered ? "1" : "0", // Show overlay on hover
    transition: "opacity 0.3s ease-in-out",
    borderRadius: "55px", // Match card border radius
  };

  const buttonStyle = {
    backgroundColor: isHovered ? "#A5A8F2" : "#3C43EB",
    transition: "background-color 0.1s ease-in-out",
  };

  return (
    <div
      className="rounded-lg overflow-hidden text-right cursor-pointer"
      style={cardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center justify-center h-full">
        <div
          className="flex items-center justify-center rounded-full w-20 h-20"
          style={{
            backgroundColor: "#A5A8F2",
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 12.2744C20 12.6541 19.7178 12.9679 19.3518 13.0176L19.25 13.0244L4.25 13.0244C3.83579 13.0244 3.5 12.6886 3.5 12.2744C3.5 11.8947 3.78215 11.5809 4.14823 11.5313L4.25 11.5244L19.25 11.5244C19.6642 11.5244 20 11.8602 20 12.2744Z"
              fill="#3C43EB"
            />
            <path
              d="M10.829 17.7675C11.1225 18.0598 11.1235 18.5347 10.8313 18.8282C10.5656 19.095 10.149 19.1201 9.85489 18.9029L9.77062 18.8305L3.72062 12.8065C3.45298 12.54 3.42863 12.1219 3.64759 11.8278L3.72057 11.7436L9.77057 5.71857C10.0641 5.42629 10.5389 5.42727 10.8312 5.72077C11.0969 5.98759 11.1203 6.4043 10.9018 6.69746L10.829 6.78143L5.313 12.2753L10.829 17.7675Z"
              fill="#3C43EB"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SingleLinkCard;
