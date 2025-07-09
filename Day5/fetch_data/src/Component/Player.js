import React from 'react';

function Player({ name, score, current, active, winner }) {
  return (
    <div className={`player ${active ? 'active' : ''} ${winner ? 'winner' : ''}`}>
      <h2>{name}</h2>
      <p>Total: {score}</p>
      <p>Current: {current}</p>
      {winner && <p>Winner</p>}
    </div>
  );
}

export default Player;
