import React, { useState, useEffect } from 'react';
import './App.css';
import Todo from './components/todo.js';
import TodoOpen from './components/todoOpen.js';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 4000); // 4 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {showIntro ? <TodoOpen /> : <div className="fade-in"><Todo /></div>}
    </div>
  );
}

export default App;
