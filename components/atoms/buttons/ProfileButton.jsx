"use client";
import React from 'react';

const ProfileButton = ({ imgSrc, text, subtext, onClick, style }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center space-x-2 rounded-full transition-all duration-300 ease-in-out "
      style={style}
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-full overflow-hidden p-1 ml-1" style={{ backgroundColor: '#EBEBF6' }}>
        <img src={imgSrc} alt="Button Image" className="w-full h-full object-cover rounded-full" />
      </div>
      <div className="h-12 px-6 py-2 rounded-full text-black  text-right" style={{ backgroundColor: '#EBEBF6' }}>
        <div className='text-xs font-medium'>{text}</div>
        <div className='text-xs font-light leading-none'>{subtext}</div>
      </div>
    </button>
  );
};

export default ProfileButton;
