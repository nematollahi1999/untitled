"use client"
import React, { useState, useEffect } from 'react';

const ToggleMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggle = () => {
    setIsAnimating(true);
    setIsOpen(!isOpen);
  };

  const handleClose = (e) => {
    if (e.target.id === 'menu-overlay') {
      setIsAnimating(true);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 500); // Duration of the animation
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return (
    <div className='block sm:hidden'>
      <button
        onClick={handleToggle}
        className="fixed font-bold bottom-4 right-4 p-3 text-white rounded-full focus:outline-none"
      >
        فهرست
      </button>

      {(isOpen || isAnimating) && (
        <div
          id="menu-overlay"
          onClick={handleClose}
          className={`fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center transition-all ${
            isOpen ? 'animate-blur-in' : 'animate-blur-out'
          }`}
        >
          <div
            className={`absolute bottom-4 left-4 flex flex-col space-y-4 p-6 rounded-lg shadow-lg transition-transform transform ${
              isOpen
                ? 'translate-y-0 opacity-100 animate-fade-in-up'
                : 'translate-y-8 opacity-0 animate-fade-out-down'
            }`}
          >
            <button className="py-2 px-4 text-white rounded focus:outline-none">
              ساخت لباس
            </button>
            <button className="py-2 px-4 text-white rounded focus:outline-none">
              طراحی لباس
            </button>
            <button className="py-2 px-4 text-white rounded focus:outline-none">
              فروشگاه
            </button>
            <button className="py-2 px-4 text-white rounded focus:outline-none">
              کلابز
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToggleMenu;
