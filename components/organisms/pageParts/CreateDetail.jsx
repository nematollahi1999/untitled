"use client";
import ProfileButton from "@/components/atoms/buttons/ProfileButton";
import NeckAccordion from "@/components/molecules/accordions/NeckAccordion";
import React from "react";

function CreateDetail() {
  const handleButtonClick = () => {
    alert("Button clicked!");
  };

  const accordionItems = [
    {
      title: "نوع یقه",
      options: ["یقه عادی", "یقه 3 سانتی", "یقه ماک"],
    },
    {
      title: "فیت یقه",
      options: ["یقه لوس فیت", "یقه نرمال فیت", "یقه تایت فیت"],
    },
    {
      title: "دوخت یقه",
      options: ["دو نخه", "دوخت تک نخه", "دوخت مخفی"],
    },
  ];
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
        <NeckAccordion items={accordionItems} />
      </div>
    </div>
  );
}

export default CreateDetail;
