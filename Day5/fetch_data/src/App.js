import React, { useState } from 'react';
import './App.css';
import Player from './components/Player';
import Dice from './components/Dice';
import Controls from './components/Controls';
import GameSetup from './components/GameSetup';

function App() {
  const [playerNames, setPlayerNames] = useState(['Player 1', 'Player 2']);
  const [targetScore, setTargetScore] = useState(100);
  const [started, setStarted] = useState(false);

  const [scores, setScores] = useState([0, 0]);
  const [current, setCurrent] = useState(0);
  const [activePlayer, setActivePlayer] = useState(0);
  const [dice, setDice] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const switchPlayer = () => {
    setCurrent(0);
    setActivePlayer(activePlayer === 0 ? 1 : 0);
  };

  const rollDice = () => {
    if (gameOver) return;
    const roll = Math.floor(Math.random() * 6) + 1;
    setDice(roll);
    if (roll === 1) {
      switchPlayer();
    } else {
      setCurrent(current + roll);
    }
  };

  const hold = () => {
    if (gameOver) return;
    const newScores = [...scores];
    newScores[activePlayer] += current;
    setScores(newScores);

    if (newScores[activePlayer] >= targetScore) {
      setGameOver(true);
    } else {
      switchPlayer();
    }
  };

  const resetGame = () => {
    setScores([0, 0]);
    setCurrent(0);
    setActivePlayer(0);
    setDice(null);
    setGameOver(false);
    setStarted(false);
  };

  const handleStart = (names, target) => {
    setPlayerNames(names);
    setTargetScore(Number(target));
    setStarted(true);
  };

  return (
    <div className="game">
      <h1> Dice Game </h1>

      {!started ? (
        <GameSetup onStart={handleStart} />
      ) : (
        <>
          <h3> Target: {targetScore}</h3>
          <div className="players">
            <Player id={0} name={playerNames[0]} score={scores[0]} current={activePlayer === 0 ? current : 0} active={activePlayer === 0} winner={gameOver && activePlayer === 0} />
            <Player id={1} name={playerNames[1]} score={scores[1]} current={activePlayer === 1 ? current : 0} active={activePlayer === 1} winner={gameOver && activePlayer === 1} />
          </div>
          <Dice number={dice} />
          <Controls onRoll={rollDice} onHold={hold} onReset={resetGame} />
        </>
      )}
    </div>
  );
}

export default App;
