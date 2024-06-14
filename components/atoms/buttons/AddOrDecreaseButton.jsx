"use client";
import React, { useState } from "react";

const Counter = ({ style }) => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    if (count < 5) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="absolute transform scale-75 lg:scale-100" style={style}>
    <div className=" flex items-center ">
      <div className="text-3xl unison-light w-20 h-10">
        {String(count).padStart(2, '0')}
      </div>
      <div className="flex flex-col items-center">
        <button
          onClick={handleIncrement}
          className=" text-black rounded-t-md text-2xl unison-light"
        >
          +
        </button>
        <button
          onClick={handleDecrement}
          className=" text-black rounded-b-md text-2xl unison-light"
        >
          -
        </button>
      </div>
    </div>
    </div>
  );
};

export default Counter;
