"use client";
import ProfileButton from "@/components/atoms/buttons/ProfileButton";
import CalculatePrice from "@/components/molecules/cards/CalculatePrice";
import {React , useState} from "react";

function CreateDetail({ accordion, headerText, buttonText }) {
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

      <div className="pr-4 py-4">
        {accordion}
      </div>
      
      <div className="pr-4 py-5 ">
        <CalculatePrice />
      </div>
    </div>
  );
}

export default CreateDetail;
