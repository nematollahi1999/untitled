"use client";
import ProfileButton from "@/components/atoms/buttons/ProfileButton";
import Accordion from "@/components/molecules/accordions/Accordion";
import CalculatePrice from "@/components/molecules/cards/CalculatePrice";
import { neckItems, bodyItems, sleeveItems } from "@/utils/consts";
import React from "react";

function CreateDetail() {
  const handleButtonClick = () => {
    alert("Button clicked!");
  };

  

  return (
    <div className="w-full">
      <div className="p-4">
        <ProfileButton
          imgSrc="https://via.placeholder.com/150"
          text="محمدحسین نعمت الهی"
          subtext="دولوپرز کلاب"
          onClick={handleButtonClick}
          style={{ width: "auto" }}
        />
      </div>
      <h1 className="font-black px-4 pt-8">طراحی یقه</h1>
      <div className="pr-4 py-4">
        <Accordion items={neckItems} />
      </div>
      <div className="px-4">
        <button
          className=" rounded-full text-white py-3 px-6"
          style={{ backgroundColor: "#3C43EB" }}
        >
          اتمام و ذخیره
        </button>
      </div>
      <div className="pr-4 py-5 ">
        <CalculatePrice />
      </div>
    </div>
  );
}

export default CreateDetail;
