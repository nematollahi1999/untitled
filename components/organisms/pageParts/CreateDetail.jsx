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
      header: "انتخاب نوع یقه",
      detail:
        "نوع یقه برحسب سلیقه کاربر روی راحتی و انعطاف حرکتی گردن تاثیر مستقیم دارد.",
      samples: "/",
      options: [
        {
          title: "یقه نرمال",
          subtitle: "یقه عادی یک سانتی",
          img: "/images/neck.jpg",
        },
        {
          title: "یقه سه سانتی",
          subtitle: "یقه عادی یک سانتی",
          img: "/images/neck.jpg",
        },
        {
          title: "یقه ماک",
          subtitle: "یقه عادی یک سانتی",
          img: "/images/neck.jpg",
        },
      ],
    },
    {
      title: "فیت یقه",
      header: "تعیین اندازه یقه",
      detail:
        "نوع یقه برحسب سلیقه کاربر روی راحتی و انعطاف حرکتی گردن تاثیر مستقیم دارد.",
      samples: "/",
      options: [
        {
          title: "لوس فیت",
          subtitle: "یقه عادی یک سانتی",
          img: "/images/neck.jpg",
        },
        {
          title: "نرمال فیت",
          subtitle: "یقه عادی یک سانتی",
          img: "/images/neck.jpg",
        },
        {
          title: "تایت فیت",
          subtitle: "یقه عادی یک سانتی",
          img: "/images/neck.jpg",
        },
      ],
    },
    {
      title: "دوخت یقه",
      header: "تعیین دوخت یقه",
      detail:
        "نوع یقه برحسب سلیقه کاربر روی راحتی و انعطاف حرکتی گردن تاثیر مستقیم دارد.",
      samples: "/",
      options: [
        {
          title: "تک نخه",
          subtitle: "یقه عادی یک سانتی",
          img: "/images/neck.jpg",
        },
        {
          title: "دو نخه",
          subtitle: "یقه عادی یک سانتی",
          img: "/images/neck.jpg",
        },
        {
          title: "دوخت مخفی",
          subtitle: "یقه عادی یک سانتی",
          img: "/images/neck.jpg",
        },
      ],
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
      <h1 className="font-black px-4 pt-8">طراحی یقه</h1>
      <div className="pr-4 py-4">
        <NeckAccordion items={accordionItems} />
      </div>
      <div className="px-4">
        <button className=" rounded-full bg-black text-white py-3 px-6">
          اتمام و ذخیره
        </button>
      </div>
    </div>
  );
}

export default CreateDetail;
