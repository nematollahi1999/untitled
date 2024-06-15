import CreateDetail from "@/components/organisms/pageParts/CreateDetail";
import CreateSpace from "@/components/organisms/pageParts/CreateSpace";
import React from "react";

const HomePage = () => {
  return (
    <div className="h-screen overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-7 lg:grid-cols-10 h-full">
        {/* Left Column - hidden on mobile and tablet */}
        <div className="hidden lg:block lg:col-span-3"></div>

        {/* Middle Column - always visible */}
        <div className="col-span-1 md:col-span-4 md:p-6 lg:col-span-4 lg:p-6 flex items-center justify-center p-0">
          <CreateSpace />
        </div>

        {/* Right Column - hidden on mobile, visible on tablet and desktop */}
        <div
          dir="rtl"
          className="hidden md:block md:col-span-3 lg:col-span-3 flex items-start justify-start py-4 pr-4 h-screen overflow-y-auto hide-scrollbar"
        >
          <CreateDetail />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
