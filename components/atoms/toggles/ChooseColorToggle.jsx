"use client";
import React, { useState } from "react";

const ChooseColorToggle = ({ options, style }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="absolute" style={style}>
    <div className="flex flex-col space-y-2">
      {options.map((option) => (
        <div
          key={option.value}
          className={`flex items-center justify-center w-7 h-7 rounded-full cursor-pointer border border-2 ${option.bgColor}`}
          onClick={() => handleOptionClick(option)}
        >
          {selectedOption === option && (
            <svg
              className="w-4 h-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </div>
      ))}
    </div>
    </div>
  );
};

export default ChooseColorToggle;
