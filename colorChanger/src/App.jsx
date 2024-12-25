import React, { useState } from 'react';

function App() {
  const [bgColor, setState] = useState('white');

  function changeBG(color) {
    setState(color);
  }

  return (
    <div style={{ backgroundColor: bgColor }} className="min-h-screen">
      <nav className="grid grid-cols-3 gap-4 p-4 bg-white rounded-lg shadow-md">
        <button 
          onClick={() => changeBG('red')} 
          className="py-2 px-4 text-white bg-red-500 rounded hover:bg-red-600"
        >
          Red
        </button>
        <button 
          onClick={() => changeBG('blue')} 
          className="py-2 px-4 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Blue
        </button>
        <button 
          onClick={() => changeBG('green')} 
          className="py-2 px-4 text-white bg-green-500 rounded hover:bg-green-600"
        >
          Green
        </button>
        <button 
          onClick={() => changeBG('yellow')} 
          className="py-2 px-4 text-white bg-yellow-500 rounded hover:bg-yellow-600"
        >
          Yellow
        </button>
        <button 
          onClick={() => changeBG('pink')} 
          className="py-2 px-4 text-white bg-pink-500 rounded hover:bg-pink-600"
        >
          Pink
        </button>
        <button 
          onClick={() => changeBG('purple')} 
          className="py-2 px-4 text-white bg-purple-500 rounded hover:bg-purple-600"
        >
          Purple
        </button>
        <button 
          onClick={() => changeBG('gray')} 
          className="py-2 px-4 text-white bg-gray-500 rounded hover:bg-gray-600"
        >
          Gray
        </button>
      </nav>
    </div>
  );
}

export default App;
