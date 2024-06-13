import CreateSpace from "@/components/organisms/pageParts/CreateSpace";
import React from "react";

const HomePage = () => {
  return (
    <div className="h-screen overflow-hidden">
      <div className="grid grid-cols-8 h-full">
        {/* Left Column */}
        <div className="col-span-2"></div>
        {/* Middle Column */}
        <div className="col-span-3 flex items-center justify-center p-8">
          <CreateSpace />
        </div>
        {/* Right Column */}
        <div className="col-span-3"></div>
      </div>
    </div>
  );
};

export default HomePage;
