import React from 'react';
import TodoWrapper from './todoForm'; // adjust the path as needed
import bgImage from '../assets/background.png';

const Todo = () => {
  return (
    <div className="relative bg-[#2E2A40] min-h-screen overflow-hidden">
      
      {/* Background imae Doodle */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <p className="text-xl text-white m-5">FocusFlow</p>

      {/* Todo List Content */}
      <div className="relative flex items-center justify-center z-10">
        <TodoWrapper />
      </div>
      

    </div>
  );
};

export default Todo;
