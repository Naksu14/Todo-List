import React from 'react';
import TodoWrapper from './todoForm'; // adjust the path as needed
import bgImage from '../assets/background.png';

const Todo = () => {
  return (
    <div className="relative bg-[#2E2A40] min-h-screen overflow-hidden">
      
      {/* Background image with opacity */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <p className="text-xl text-white m-5">FocusFlow</p>

      {/* Content */}
      <div className="relative flex items-center justify-center z-10">
        <TodoWrapper />
      </div>
      <p className="text-sm text-white b-0 m-5">Loel Campaña | BSIT - 3B</p>

    </div>
  );
};

export default Todo;
