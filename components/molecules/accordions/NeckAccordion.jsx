"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AccordionItem = ({
  title,
  options,
  isOpen,
  onClick,
  selectedOption,
  onOptionClick,
  header,
  detail,
  samples,
}) => {
  const router = useRouter();

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
        <div className="">
          <div className="pt-4 flex justify-between items-center px-4">
            <div className="">
              <h3 className="font-black text-sm">{header}</h3>
              <p className="font-light text-xs">{detail}</p>
            </div>
            <button class="bg-gray-300 hover:bg-gray-400 text-black font-light text-sm py-2 px-4 rounded-lg leading-none" onClick={() => router.push(samples)}>
              مشاهده نمونه
            </button>
          </div>
          <div className="p-4">
            <div className="flex gap-2">
              {options.map((option, index) => (
                <div
                  key={index}
                  className={`w-1/3 card rounded cursor-pointer`}
                  onClick={() => onOptionClick(option.title)}
                  style={
                    selectedOption === option.title
                      ? {
                          borderTopRightRadius: "20px",
                          borderTopLeftRadius: "45px",
                          borderBottomRightRadius: "45px",
                          borderBottomLeftRadius: "45px",
                          backgroundColor: "#9599FF",
                          color: "#3C43EB",
                        }
                      : {
                          borderTopRightRadius: "20px",
                          borderTopLeftRadius: "45px",
                          borderBottomRightRadius: "45px",
                          borderBottomLeftRadius: "45px",
                          backgroundColor: "#EBEBF6",
                        }
                  }
                >
                  <div className="flex flex-col items-start">
                    <div className="p-3">
                      <div className="text-sm text-black">{option.title}</div>
                      <div className="text-xs font-light text-gray-700">
                        {option.subtitle}
                      </div>
                    </div>
                    <div className="relative flex items-center justify-center">
                      <img
                        className="w-full h-auto"
                        src={option.img}
                        alt="product"
                        style={{
                          borderTopRightRadius: "0px",
                          borderTopLeftRadius: "0px",
                          borderBottomRightRadius: "45px",
                          borderBottomLeftRadius: "45px",
                        }}
                      />
                      {selectedOption === option.title && (
                        <div
                          className="absolute inset-0 opacity-20 rounded-b-full"
                          style={{
                            borderTopRightRadius: "0px",
                            borderTopLeftRadius: "0px",
                            borderBottomRightRadius: "45px",
                            borderBottomLeftRadius: "45px",
                            backgroundColor: "#9599FF",
                          }}
                        />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
          header={item.header}
          detail={item.detail}
          options={item.options}
          samples={item.samples}
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
