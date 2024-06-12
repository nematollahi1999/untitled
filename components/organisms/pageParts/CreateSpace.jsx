import ExpandingGlassButton from "@/components/atoms/buttons/ExpandingGlassButton";
import React from "react";

function CreateSpace() {
  return (
    <div
      className="bg-cover bg-center w-full h-full p-8"
      style={{
        backgroundImage: "url('/images/create.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderTopRightRadius: "80px",
        borderTopLeftRadius: "80px",
        borderBottomRightRadius: "80px",
        borderBottomLeftRadius: "0px",
      }}
    >
      <div className="h-full w-full">
        <ExpandingGlassButton style={{ top: "15%", left: "36%" }} text={"طراحی یقه"} color={"black"} />
      </div>
    </div>
  );
}

export default CreateSpace;
