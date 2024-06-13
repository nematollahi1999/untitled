import AddOrDecreaseButton from "@/components/atoms/buttons/AddOrDecreaseButton";
import ExpandingGlassButtonBlack from "@/components/atoms/buttons/ExpandingGlassButtonBlack";
import ChooseColorToggle from "@/components/atoms/toggles/ChooseColorToggle";

const options = [
  { value: "option1", bgColor: "bg-red-500" },
  { value: "option2", bgColor: "bg-green-500" },
  { value: "option3", bgColor: "bg-blue-500" },
  { value: "option4", bgColor: "bg-yellow-500" },
];
import React from "react";

function CreateSpace() {
  return (
    <div
      className="bg-cover bg-center w-full h-full relative"
      style={{
        backgroundImage: "url('/images/create.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderTopRightRadius: "60px",
        borderTopLeftRadius: "60px",
        borderBottomRightRadius: "60px",
        borderBottomLeftRadius: "0px",
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
          expandedWidth={"w-56"}
          text={"طراحی یقه"}
          subtext={"انتخاب استایل فیت و دوخت یقه"}
        />
        <ExpandingGlassButtonBlack
          style={{ top: "46%", left: "24%" }}
          expandedWidth={"w-60"}
          text={"طراحی آستین"}
          subtext={"انتخاب استایل فیت و دوخت و آستین"}
        />
        <ExpandingGlassButtonBlack
          style={{ top: "30%", left: "52%" }}
          expandedWidth={"w-64"}
          text={"طراحی تنه"}
          subtext={"انتخاب استایل فیت و دوخت و دیزاین تنه"}
        />
        <AddOrDecreaseButton style={{ top: "90%", left: "7%" }} />
        <ChooseColorToggle options={options} style={{ top: "73%", left: "7%" }} />
      </div>
    </div>
  );
}

export default CreateSpace;
