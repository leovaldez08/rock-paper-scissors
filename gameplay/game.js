let rock1 = document.getElementById('rock1');
let paper1 = document.getElementById('paper1');
let scissors1 = document.getElementById('scissors1');

let rock2 = document.getElementById('rock2');
let paper2 = document.getElementById('paper2');
let scissors2 = document.getElementById('scissors2');

let rockButton = document.getElementById('rockb');
let paperButton = document.getElementById('paperb');
let scissorsButton = document.getElementById('scissorsb');

let playerOneScore = document.getElementById('player1score');
let playerTwoScore = document.getElementById('player2score');
let resetButton = document.getElementById('playgame');
let player1score = 0;
let player2score = 0;

function randomNumberGenerator() {
  result = Math.floor(Math.random() * 3) + 1;
  return result;
}

function autoPlay() {
  output = randomNumberGenerator();
  switch (output) {
    case 1:
      rock2.style.display = 'block';
      paper2.style.display = 'none';
      scissors2.style.display = 'none';
      break;
    case 2:
      rock2.style.display = 'none';
      paper2.style.display = 'block';
      scissors2.style.display = 'none';
      break;
    case 3:
      rock2.style.display = 'none';
      paper2.style.display = 'none';
      scissors2.style.display = 'block';
      break;
    default:
      break;
  }
}

rockButton.onclick = () => {
  autoPlay();
  rock1.style.display = 'block';
  scissors1.style.display = 'none';
  paper1.style.display = 'none';

  if (output == 2) {
    player2score += 1;
  } else if (output == 3) {
    player1score += 1;
  }

  playerOneScore.innerHTML = player1score;
  playerTwoScore.innerHTML = player2score;
};

scissorsButton.onclick = () => {
  autoPlay();
  scissors1.style.display = 'block';
  rock1.style.display = 'none';
  paper1.style.display = 'none';

  if (output == 1) {
    player2score += 1;
  } else if (output == 2) {
    player1score += 1;
  }

  playerOneScore.innerHTML = player1score;
  playerTwoScore.innerHTML = player2score;
};

paperButton.onclick = () => {
  autoPlay();
  paper1.style.display = 'block';
  scissors1.style.display = 'none';
  rock1.style.display = 'none';

  if (output == 3) {
    player2score += 1;
  } else if (output == 1) {
    player1score += 1;
  }

  playerOneScore.innerHTML = player1score;
  playerTwoScore.innerHTML = player2score;
};

resetButton.onclick = () => {
  location.reload();
};
