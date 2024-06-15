import OpenMenuButton from "@/components/atoms/buttons/OpenMenuButton";
import PlayButton from "@/components/atoms/buttons/PlayButton";
import React from "react";
import ProductsCards from "./ProductsCards";

function ShowProducts() {
  return (
    <div className="w-full">
      <OpenMenuButton />
      <PlayButton />
      <div className="flex justify-between items-center text-right py-4 px-4">
      <svg
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.9508 11.6491L12.0133 22.5866"
            stroke="black"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.1469 11.6674L22.9508 11.6484L22.9326 20.4531"
            stroke="black"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <rect
            x="1.5"
            y="1.93164"
            width="31"
            height="31"
            rx="15.5"
            stroke="black"
          />
        </svg>
        <h1 className="font-light text-xl">
          لباس هایی که
          <br />
          کاربران آنتایتلد ساخته اند
        </h1>
        
      </div>
      <ProductsCards />
    </div>
  );
}

export default ShowProducts;
