const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const name0El = document.getElementById('name--0');
const name1El = document.getElementById('name--1');

let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  name0El.textContent = 'Player 1';
  name1El.textContent = 'Player 2';

  diceEl.classList.add('hidden');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    
    const dice = Math.trunc(Math.random() * 6) + 1;

    
    switch (dice) {
      case 1:
        diceEl.src = '1.jpg';
        break;
      case 2:
        diceEl.src = '2.jpg';
        break;
      case 3:
        diceEl.src = '3.jpg';
        break;
      case 4:
        diceEl.src = '4.jpg';
        break;
      case 5:
        diceEl.src = '5.jpg';
        break;
      case 6:
        diceEl.src = '6.jpg';
        break;
    }
    diceEl.classList.remove('hidden');

   
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    
    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add('hidden');
      document.getElementById(`name--${activePlayer}`).textContent = 'WINNER!';
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);