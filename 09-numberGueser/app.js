const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('random');

textarea.focus();

textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value);
  console.log(e);
  if (e.key === 'Enter') {
    console.log('enter');

    setTimeout(() => {
      textarea.value = '';
    }, 500);
    randomSelect();
  }
});

function createTags(input) {
  const tags = input
    .split(',')
    .map((tag) => {
      return tag.trim();
    })
    .filter((tag) => {
      return tag.trim() !== '';
    });
  tagsEl.innerHTML = '';
  tags.forEach((element) => {
    // tagsEl.innerHTML += `<span class="tag">${element}</span>`
    //  ili
    const tag = document.createElement('span');
    tag.classList.add('tag');
    tag.innerHTML = element;
    tagsEl.appendChild(tag);
  });
}

function randomSelect() {
  let brojOdbrojavanja = 30;
  console.log(tagsEl);
  console.log(tagsEl.childNodes);
  console.log(tagsEl.childNodes.length);

  const interval = setInterval(() => {
    const rand = Math.floor(Math.random() * tagsEl.childNodes.length);
    brojOdbrojavanja--;
    if (brojOdbrojavanja === 0) {
      tagsEl.childNodes[rand].classList.add('higlight');
      clearInterval(interval);
    } else {
      setTimeout(() => {
        tagsEl.childNodes[rand].classList.remove('higlight');
      }, 200);
    }

    tagsEl.childNodes[rand].classList.add('higlight');
  }, 200);
}

// *****************************************
// Game values
let min = 1;
let max = 10;
let winningNum = getWiningNum(min, max);
let guessesLeft = 3;

// UI element
const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');

//Play again event lisener
game.addEventListener('mousedown', function (e) {
  if (e.target.className === 'play-again') {
    window.location.reload();
  }
});

// Asigna UI min and max
minNum.textContent = min;
maxNum.textContent = max;

guessBtn.addEventListener('click', function () {
  let guess = parseInt(guessInput.value);
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter number betwen ${min} and ${max}. `, 'red', 3);
    return;
  }

  // Check if win
  if (guess === winningNum) {
    // Win
    gameOver(true, `${winningNum} is correct, you WIN!`);
  } else {
    // Wrong number
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      // Game over lost
      gameOver(
        false,
        `Game over, you lost . Correct number is ${winningNum}`,
        2
      );
    } else {
      // game continue - answer wrong

      // Change border color
      guessInput.style.borderColor = 'red';

      // Clear input
      guessInput.value = '';

      // Tel user it is wrong number
      setMessage(
        `${guess} is  not correct, ${guessesLeft} guesses left`,
        'red',
        4
      );
    }
  }
});

// Set message
function setMessage(mess, color, odakleDolazim) {
  message.style.color = color;
  message.textContent = mess;
  guessInput.focus();
}

//Game over
function gameOver(won, msg) {
  let color;
  won === true ? (color = 'green') : (color = 'red');

  // Disable Input value
  guessInput.disabled = true;

  // Change the border
  guessInput.style.borderColor = color;

  // Set message
  setMessage(msg, color, ' gameover');

  //play again
  guessBtn.value = 'Play again';
  guessBtn.className += 'play-again';
}

function getWiningNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
