import CreateDetail from "@/components/organisms/pageParts/CreateDetail";
import CreateSpace from "@/components/organisms/pageParts/CreateSpace";
import React from "react";


const HomePage = () => {
  return (
    <div className="h-screen overflow-hidden">
      <div className="grid grid-cols-10 h-full">
        {/* Left Column */}
        <div className="col-span-3"></div>
        {/* Middle Column */}
        <div className="col-span-4 flex items-center justify-center p-8">
          <CreateSpace />
        </div>
        {/* Right Column */}
        <div dir="rtl" className="col-span-3 flex items-start justify-start p-8">
          <CreateDetail />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
