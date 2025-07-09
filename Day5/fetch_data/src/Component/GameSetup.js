import React, { useState } from 'react';

function GameSetup({ onStart }) {
  const [name1, setName1] = useState('Player 1');
  const [name2, setName2] = useState('Player 2');
  const [target, setTarget] = useState(100);

  const handleSubmit = (e) => {
    e.preventDefault();
    onStart([name1 || 'Player 1', name2 || 'Player 2'], target || 100);
  };

  return (
    <form className="setup" onSubmit={handleSubmit}>
      <input type="text" placeholder="Player 1 Name" value={name1} onChange={(e) => setName1(e.target.value)} />
      <input type="text" placeholder="Player 2 Name" value={name2} onChange={(e) => setName2(e.target.value)} />
      <input type="number" placeholder="Target Score" value={target} onChange={(e) => setTarget(e.target.value)} />
      <button type="submit">Start Game</button>
    </form>
  );
}

export default GameSetup;
