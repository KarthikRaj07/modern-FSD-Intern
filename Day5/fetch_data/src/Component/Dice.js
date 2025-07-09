import React from 'react';

import dice1 from '../assets/dice1.jpg';
import dice2 from '../assets/dice2.jpg';
import dice3 from '../assets/dice3.jpg';
import dice4 from '../assets/dice4.jpg';
import dice5 from '../assets/dice5.jpg';
import dice6 from '../assets/dice6.jpg';

const diceImages = {
  1: dice1,
  2: dice2,
  3: dice3,
  4: dice4,
  5: dice5,
  6: dice6,
};

function Dice({ number }) {
  return number ? (
    <img className="dice" src={diceImages[number]} alt={`Dice ${number}`} />
  ) : (
    <p>Click "Roll" to start!</p>
  );
}

export default Dice;
