import CreateSpace from "@/components/organisms/pageParts/CreateSpace";
import React from "react";

const HomePage = () => {
  return (
    <div className="h-screen overflow-hidden">
      <div className="grid grid-cols-4 h-full">
        {/* Left Column */}
        <div className="col-span-1"></div>
        
        {/* Middle Column */}
        <div className="col-span-2 flex items-center justify-center p-10">
          <CreateSpace />
        </div>
        
        {/* Right Column */}
        <div className="col-span-1"></div>
      </div>
    </div>
  );
};

export default HomePage;
