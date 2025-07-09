import React from 'react';

function Controls({ onRoll, onHold, onReset }) {
  return (
    <div className="controls">
      <button onClick={onRoll}> Roll</button>
      <button onClick={onHold}> Hold</button>
      <button onClick={onReset}> New Game</button>
    </div>
  );
}

export default Controls;
