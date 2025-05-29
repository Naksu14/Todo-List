import React, { useState, useEffect } from 'react';

const TodoWrapper = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [selectedTask, setSelectedTask] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const addTask = () => {
    if (input.trim()) {
      const timestamp = new Date().toLocaleString();
      setTasks([{ text: input, completed: false, timestamp }, ...tasks]);
      setInput('');
    }
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    const filtered = tasks.filter((_, i) => i !== index);
    if (selectedTask === tasks[index]) {
      setSelectedTask(null);
    }
    setTasks(filtered);
  };

  return (
    <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-6 p-6`}>
      {/* Todo List */}
      <div className="bg-white/80 w-full md:w-[580px] h-[700px] p-6 rounded-lg shadow-xl text-[#2E2A40] flex flex-col">
        <h2 className="text-2xl font-bold mb-4 text-left">Todo List</h2>

        <div className="flex gap-2 mb-4">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task..."
            rows={1}
            className="flex-1 border border-[#9685E3]/30 rounded px-3 py-3 resize-none 
              focus:outline-none focus:ring-2 focus:ring-[#9685E3] 
              placeholder-[#9685E3]/40 text-black"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                addTask();
              }
            }}
          />
          <button
            onClick={addTask}
            className="bg-[#9685E3]/40 text-white px-4 py-3 rounded hover:bg-[#9685E3] transition"
          >
            Add task
          </button>
        </div>

        <ul className="space-y-2 overflow-y-auto flex-grow pr-2 custom-scrollbar">
          {tasks.map((task, index) => (
            <li
              key={index}
              onClick={() => setSelectedTask(task)}
              className={`flex items-start justify-between p-3 rounded overflow-hidden cursor-pointer ${
                task.completed
                  ? 'bg-[#2C2352]/30 text-[#2E2A40]/40'
                  : 'bg-[#9685E3]/30'
              }`}
            >
              <div className="flex flex-col gap-1 w-full min-w-0">
                <div className="flex items-center gap-2 min-w-0 w-full">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={(e) => {
                      e.stopPropagation();
                      toggleTask(index);
                    }}
                    className="w-5 h-5 border border-[#9685E3] accent-[#9685E3] rounded shrink-0"
                  />
                  <span className="font-bold flex-grow min-w-0 overflow-hidden text-ellipsis whitespace-nowrap">
                    {task.text.charAt(0).toUpperCase() + task.text.slice(1)}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteTask(index);
                    }}
                    aria-label="Delete task"
                    className="text-[#2E2A40]/30 hover:text-[#2E2A40] text-lg font-bold transition duration-200 ml-4 flex-shrink-0"
                  >
                    🗑️
                  </button>
                </div>
                <span className="text-xs text-[#2E2A40]/60 pl-7">{task.timestamp}</span>
              </div>
            </li>
          ))}
        </ul>

        <div className="flex justify-between mt-4 text-sm text-gray-400">
          <span>
            Remaining tasks: {tasks.length - tasks.filter((task) => task.completed).length}
          </span>
          <span>Completed tasks: {tasks.filter((task) => task.completed).length}</span>
        </div>
      </div>

      {/* Task Detail Panel */}
      {(!isMobile || selectedTask) && (
        <div className="relative bg-white/80 w-full md:w-[300px] h-[700px] p-6 rounded-lg shadow-xl text-[#2E2A40] overflow-auto custom-scrollbar">
          {selectedTask ? (
            <>
              {isMobile && (
                <button
                  onClick={() => setSelectedTask(null)}
                  className="absolute top-2 right-2 text-[#2C2352] hover:text-[#9685E3] text-xl font-bold"
                >
                  ❌
                </button>
              )}
              <h3 className="text-xl font-bold mb-2">Task Details</h3>
              <p className="mb-4 whitespace-pre-wrap">{selectedTask.text}</p>
              <p className="text-sm text-gray-600 mb-1">Added: {selectedTask.timestamp}</p>
              <p className="text-sm text-gray-600">
                Status: {selectedTask.completed ? 'Completed' : 'Incomplete'}
              </p>
            </>
          ) : (
            <p className="text-gray-500">Select a task to see details</p>
          )}
        </div>
      )}
    </div>
  );
};

export default TodoWrapper;
