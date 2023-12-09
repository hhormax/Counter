import React, { useState } from 'react';
import './App.css';

function App() {

  const [value, setValue] = useState(() => 0)

  return (
    <div className="counter">
      <div className="value">{value}</div>
      <div className="buttons">
        <button onClick={() => {setValue(value + 1)}} className="increase">+</button>
        <button onClick={() => {setValue(0)}} className="reset">Reset</button>
        <button onClick={() => {setValue(value - 1)}} className="decrease">-</button>
      </div>
    </div>
  );
}

export default App;