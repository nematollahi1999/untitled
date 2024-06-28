"use client";
import React, { useState, useEffect } from "react";
import BodyAccordion from "@/components/molecules/accordions/BodyAccordion";
import NeckAccordion from "@/components/molecules/accordions/NeckAccordion";
import SleeveAccordion from "@/components/molecules/accordions/SleeveAccordion";
import CreateDetail from "@/components/organisms/pageParts/CreateDetail";
import CreateSpace from "@/components/organisms/pageParts/CreateSpace";
import ShowProducts from "@/components/organisms/pageParts/ShowProducts";
import { tshirts } from "@/utils/consts";

const HomePage = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({
    body: "fit",
    neck: "normal",
    sleeve: "normal",
  });
  const [createImage, setCreateImage] = useState(null);

  useEffect(() => {
    const selectedTshirt = tshirts.find(
      (tshirt) =>
        tshirt.body === selectedOptions.body &&
        tshirt.neck === selectedOptions.neck &&
        tshirt.sleeve === selectedOptions.sleeve
    );

    if (selectedTshirt) {
      setCreateImage(selectedTshirt.src);
    } else {
      setCreateImage(null); // or set a default image if no match is found
    }
  }, [selectedOptions]);

  const handleOptionChange = (type, option) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [type]: option,
    }));
  };

  const toggleAccordion = (accordion) => {
    setActiveAccordion(activeAccordion === accordion ? null : accordion);
  };

  return (
    <div className="h-screen overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-7 lg:grid-cols-10 h-full">
        <div className="hidden lg:block lg:col-span-3 flex items-start justify-start py-4 pl-4 h-screen overflow-y-auto hide-scrollbar">
          <ShowProducts />
        </div>

        <div className="col-span-1 md:col-span-4 md:p-6 lg:col-span-4 lg:p-6 flex items-center justify-center p-0">
          <CreateSpace
            renderBody={() => toggleAccordion("body")}
            renderCollar={() => toggleAccordion("neck")}
            renderSleeve={() => toggleAccordion("sleeve")}
            createImage={createImage}
          />
        </div>

        <div
          dir="rtl"
          className="hidden md:block md:col-span-3 lg:col-span-3 flex items-start justify-start py-4 pr-4 h-screen overflow-y-auto hide-scrollbar"
        >
          <CreateDetail
            accordion={
              activeAccordion === "neck" ? (
                <NeckAccordion
                  selectedOption={selectedOptions.neck}
                  onOptionChange={(option) => handleOptionChange("neck", option)}
                />
              ) : activeAccordion === "sleeve" ? (
                <SleeveAccordion
                  selectedOption={selectedOptions.sleeve}
                  onOptionChange={(option) => handleOptionChange("sleeve", option)}
                />
              ) : activeAccordion === "body" ? (
                <BodyAccordion
                  selectedOption={selectedOptions.body}
                  onOptionChange={(option) => handleOptionChange("body", option)}
                />
              ) : (
                <NeckAccordion
                  selectedOption={selectedOptions.neck}
                  onOptionChange={(option) => handleOptionChange("neck", option)}
                />
              )
            }
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
