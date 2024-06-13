"use client";

import React, { useState } from "react";

const AccordionItem = ({
  title,
  options,
  isOpen,
  onClick,
  selectedOption,
  onOptionClick,
}) => {
  return (
    <div className=" rounded mb-2 w-full">
      <div
        className="flex w-full items-center justify-between p-1 rounded-full cursor-pointer"
        onClick={onClick}
        style={{ backgroundColor: "#EBEBF6" }}
      >
        <div className="flex items-center">
          <div
            className="w-12 h-12 p-1 flex justify-center items-center text-center text-2xl leading-none rounded-full text-white"
            style={{ backgroundColor: "#3C43EB" }}
          >
            {isOpen ? "-" : "+"}
          </div>

          <div className="flex-1 text-right pr-4">{title}</div>
        </div>

        <span
          className="badge h-8 flex items-center text-white rounded-full ml-4 px-6 text-center "
          style={
            selectedOption
              ? { backgroundColor: "#9599FF", color: "#3C43EB" }
              : { backgroundColor: "#CCCCDF" }
          }
        >
          {selectedOption || "انتخاب نشده"}
        </span>
      </div>
      {isOpen && (
        <div className="p-3 bg-white">
          <div className="flex gap-2">
            {options.map((option, index) => (
              <div
                key={index}
                className={`card p-2 border rounded cursor-pointer ${
                  selectedOption === option ? "bg-blue-200" : "bg-gray-100"
                }`}
                onClick={() => onOptionClick(option)}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const NeckAccordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleOptionClick = (index, option) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [index]: option,
    }));
  };

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          options={item.options}
          isOpen={openIndex === index}
          onClick={() => handleItemClick(index)}
          selectedOption={selectedOptions[index]}
          onOptionClick={(option) => handleOptionClick(index, option)}
        />
      ))}
    </div>
  );
};

export default NeckAccordion;
