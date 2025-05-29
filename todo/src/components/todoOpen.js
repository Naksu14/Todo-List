import React from 'react';

const TodoBg = () => {
  return (
    <div className="relative bg-[#2E2A40] min-h-screen overflow-hidden">
      <p className="text-xl text-white m-5 font-bold">FocusFlow</p>

      {/* Writing Animation */}
      <div className="relative flex items-center justify-center z-10 h-[100px] mt-20">
        <h1 className="text-white text-2xl md:text-4xl font-mono whitespace-nowrap overflow-hidden border-r-4 border-white animate-typing">
          Welcome to FocusFlow
        </h1>
      </div>
    </div>
  );
};

export default TodoBg;
