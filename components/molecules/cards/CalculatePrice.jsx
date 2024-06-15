import React from "react";

const CalculatePrice = ({ title, subtitle }) => {
  return (
    <div
      className="w-full mx-auto rounded-2xl shadow-lg overflow-hidden"
      style={{
        backgroundColor: "#EBEBF6",
        borderTopRightRadius: "45px",
        borderTopLeftRadius: "45px",
        borderBottomRightRadius: "45px",
        borderBottomLeftRadius: "45px",
      }}
    >
      <div className="p-10">
        <div className="text-sm font-bold mb-2">محاسبه قیمت لباس</div>
        <div className="text-xs text-gray-600 mb-4">
          محاسبه قیمت برحسب نوع پارچه و مقدار آن محاسبه میشود.
        </div>
        <div className="flex items-center justify-between px-20">
          <span className="text-2xl font-semibold text-gray-700">100</span>
          <span className="text-2xl font-semibold text-gray-700">+</span>
          <span className="text-2xl font-semibold text-gray-700">50</span>
        </div>
      </div>
    </div>
  );
};

export default CalculatePrice;
