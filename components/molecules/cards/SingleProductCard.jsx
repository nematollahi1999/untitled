"use client";
import React, { useState } from "react";

const SingleProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const buttonStyle = {
    backgroundColor: isHovered ? "#2c316b" : "#3C43EB",
    transition: "background-color 0.3s ease-in-out",
  };

  return (
    <div
      className=" rounded-lg overflow-hidden text-right"
      style={{
        backgroundColor: "#EBEBF6",
        borderTopRightRadius: "55px",
        borderTopLeftRadius: "55px",
        borderBottomRightRadius: "55px",
        borderBottomLeftRadius: "55px",
      }}
    >
      <div className="px-4 py-4">
        <div className="flex items-center justify-between mb-2 py-2 px-6">
          <div className="flex items-center justify-end">
            <img
              className="w-5 h-5 rounded-full "
              src={product.profile}
              alt={product.name}
            />
            <h2 className="text-xs font-light pr-2">{product.name}</h2>
          </div>
        </div>
        <div>
          {/* <span
            className="z-50 p-1 leading-none text-xs text-white rounded-lg"
            style={{
              backgroundColor: "#3C43EB",
            }}
          >
            {product.club}
          </span> */}
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-cover mb-4 "
            style={{
              borderTopRightRadius: "35px",
              borderTopLeftRadius: "35px",
              borderBottomRightRadius: "35px",
              borderBottomLeftRadius: "35px",
            }}
          />
        </div>

        <div className="flex items-center justify-between px-4">
          <h3 className="text-md font-black text-sm">{product.title}</h3>
          <p className="text-gray-700 text-xs">تومان {product.price}</p>
        </div>
        <div className="px-4 flex items-center justify-between py-3">
          <div className="relative flex items-center">
            {[...Array(5)].map((_, index) => (
              <img
                key={index}
                src={`/images/profile.jpg`} // Replace with actual image paths
                alt={`Profile ${index + 1}`}
                className={`w-5 h-5 rounded-full border-1  border-white -ml-3 ${
                  index !== 0 ? "" : ""
                }`}
              />
            ))}
          </div>
          <div className="text-xs text-gray-700 ">
            {product.saleNumber} فروخته شده
          </div>
        </div>
        <div className="px-4 pb-4">
          <button
            className="w-full text-xs text-white px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out"
            style={buttonStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCard;
