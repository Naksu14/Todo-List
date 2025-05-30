import React from 'react';
import bgImage from '../assets/background.png';


const TodoBg = () => {
  return (
    <div className="relative bg-[#2E2A40] min-h-screen overflow-hidden px-4 sm:px-6">
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
    {/* Logo/Header */}
    <p className="text-lg sm:text-xl text-white mt-5 ml-5 font-bold">FocusFlow</p>

    {/* Typing Animation Fixed in Center */}
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
      <h1 className="text-white text-xl sm:text-3xl md:text-4xl font-mono whitespace-nowrap overflow-hidden border-r-4 border-white animate-typing">
        Welcome to FocusFlow <span className='text-[#2E2A40]/50'>✏️</span>
      </h1>
    </div>

    {/* Footer Text at Bottom */}
    <div className="absolute bottom-5 w-full text-lefft">
      <p className="text-sm text-white">Loel Campaña | BSIT - 3B</p>
    </div>
  </div>

  );
};

export default TodoBg;
