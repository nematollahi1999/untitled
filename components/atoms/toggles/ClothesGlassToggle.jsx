"use client";
import React, { useState } from "react";

const OptionButton = ({ option, isSelected, onClick, expandedWidth }) => {
  return (
    <div
      className={`relative flex items-center transition-all duration-300 ease-in-out backdrop-blur-sm bg-black/30 ${
        isSelected ? expandedWidth : "w-12"
      } h-12 rounded-full cursor-pointer overflow-hidden mb-1`}
      onClick={onClick}
    >
      <div className="absolute flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ease-in-out left-0">
        <img className="rounded-full p-1" src="/images/product.jpg" alt="product" />        
      </div>
      <div
        className={`pr-12 pl-2 text-white transition-opacity duration-100 ease-in-out ${
          isSelected ? "opacity-100 delay-300" : "opacity-0"
        } ml-12`}
      >
        <div className="font-bold text-xs">{option.text}</div>
        <div className="font-light text-xs">{option.subtext}</div>
      </div>
    </div>
  );
};

const ClothesGlassToggle = ({ options, expandedWidth = "w-40", style }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="absolute" style={style}>
    <div className="flex flex-col items-start">
      {options.map((option) => (
        <OptionButton
          key={option.value}
          option={option}
          isSelected={selectedOption === option.value}
          onClick={() => setSelectedOption(option.value)}
          expandedWidth={expandedWidth}
        />
      ))}
    </div>
    </div>
  );
};

export default ClothesGlassToggle;
