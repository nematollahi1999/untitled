import AddOrDecreaseButton from "@/components/atoms/buttons/AddOrDecreaseButton";
import ExpandingGlassButtonBlack from "@/components/atoms/buttons/ExpandingGlassButtonBlack";
import ChooseColorToggle from "@/components/atoms/toggles/ChooseColorToggle";
import ClothesGlassToggle from "@/components/atoms/toggles/ClothesGlassToggle";

const options = [
  { value: "option1", bgColor: "bg-gray-500" },
  { value: "option2", bgColor: "bg-black" },
  { value: "option3", bgColor: "bg-blue-500" },
  { value: "option4", bgColor: "bg-yellow-500" },
];

const clothes = [
  {
    value: "Tshirt",
    text: "ساخت تیشرت",
    subtext: "ساخته شده تا الان",
    bgColor: "bg-red-500",
    badge: "153",
    img: "/images/product.jpg",
  },
  {
    value: "Hoodie",
    text: "ساخت هودی",
    subtext: "ساخته شده تا الان",
    bgColor: "bg-green-500",
    badge: "562",
    img: "/images/product.jpg",
  },
  {
    value: "Sweart shirt",
    text: "ساخت سوئیت شرت",
    subtext: "ساخته شده تا الان",
    bgColor: "bg-blue-500",
    badge: "126",
    img: "/images/product.jpg",
  },
  {
    value: "Crop",
    text: "ساخت کراپ",
    subtext: "ساخته شده تا الان",
    bgColor: "bg-yellow-500",
    badge: "144",
    img: "/images/product.jpg",
  },
];

import React from "react";

function CreateSpace() {
  return (
    <div
      className="bg-cover bg-center w-full h-full relative lg:rounded-tr-[60px] lg:rounded-tl-[60px] lg:rounded-br-[60px] md:rounded-tr-[60px] md:rounded-tl-[60px] md:rounded-br-[60px] rounded-none"
      style={{
        backgroundImage: "url('/images/create.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <img
        src="/images/xcreate.svg"
        alt="UNTITLED create"
        className="absolute w-52"
        style={{ top: "5%", left: "7%" }}
      />
      <div className="h-full w-full">
        <ExpandingGlassButtonBlack
          style={{ top: "20%", left: "41%" }}
          expandedWidth={"w-34"}
          text={"طراحی یقه"}
          subtext={"فیت استایل دوخت"}
        />
        <ExpandingGlassButtonBlack
          style={{ top: "46%", left: "24%" }}
          expandedWidth={"w-34"}
          text={"طراحی آستین"}
          subtext={"فیت استایل دوخت"}
        />
        <ExpandingGlassButtonBlack
          style={{ top: "30%", left: "52%" }}
          expandedWidth={"w-34"}
          text={"طراحی تنه"}
          subtext={"فیت استایل دیزاین"}
        />
        <AddOrDecreaseButton style={{ bottom: "5%", right: "7%" }} />
        <ChooseColorToggle
          options={options}
          style={{ top: "5%", left: "90%" }}
        />
        <ClothesGlassToggle
          options={clothes}
          style={{ bottom: "5%", left: "6%" }}
        />
      </div>
    </div>
  );
}

export default CreateSpace;
