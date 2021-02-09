const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

console.log(randomFunc.lower);

// kopiranje na clipboard
clipboardEl.addEventListener('click', (e)=> {
  const textarea = document.createElement('textarea')
  const password = resultEl.innerText

  if (!password) {
    return
  }
  textarea.value = password
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand('copy')
  textarea.remove()
  alert('Password copied to clipboard =' + password)

})



function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}


// Generiranje passworda
generateEl.addEventListener('click', (e) => {
  const lengthPassword = +lengthEl.value; // znak + pretvara broj u number!!
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;
  resultEl.innerHTML = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    lengthPassword
  );
});

function generatePassword(lower, upper, number, symbol, lengthPassword) {
  let generPassword = '';
  let generPasswordMoj = '';

  const typesCount = lower + upper + number + symbol;
  const typesAtrray = [{ lower }, { upper }, { number }, { symbol }].filter(
    (data) => {
      // console.log(Object.values(data));
      // console.log(Object.values(data)[0]);

      return Object.values(data)[0] === true;
    }
  );

  console.log(typesAtrray);

  // ako nista nije selektirano izlazi iz petlje
  if (typesCount === 0) {
    return '';
  }

  for (let index = 0; index < lengthPassword; index++) {
    if (lower === true) {
      generPasswordMoj += getRandomLower();
    }
    if (upper === true) {
      generPasswordMoj += getRandomUpper();
    }
    if (number === true) {
      generPasswordMoj += getRandomNumber();
    }
    if (symbol === true) {
      generPasswordMoj += getRandomSymbol();
    }
  }

  generPasswordMoj = generPasswordMoj.slice(0,lengthPassword)
  console.log(generPasswordMoj);

  for (let i = 0; i < lengthPassword; i += typesCount) {
    console.log(i);
    typesAtrray.forEach((type) => {
      const funcName = Object.keys(type)[0];
      console.log(funcName);

      generPassword += randomFunc[funcName]();
    });
  }

  // dovivamo maksimalnu duljinu sloga
  const finalPassword = generPassword.slice(0, lengthPassword);
  return finalPassword;
}



// 
//
// ==============================================
// donja forma ***************************
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

const pokus = document.getElementById('pokus');

// prikaži grešku
function showError(input, message) {
  const formControl = input.parentElement;
  pokus.classList.add('ajmoo');
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// prikaži uspjeh, ukljucije klasu zeleni border...
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// provjeri email
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
}

function checkRequired(inputArr) {
  inputArr.forEach((input) => {
    if (input.value.trim() === '') {
      showError(input, `${getFieldname(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// Get filed name
function getFieldname(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Provjeru duljine zapisa
function checkLenght(input, min, max) {
  console.log(input.value.length, 'min=', min);

  if (input.value.length < parseInt(min)) {
    showError(input, `${getFieldname(input)} must be at least 3 characters`);
  } else if (input.value.length > parseInt(max)) {
    showError(
      input,
      `${getFieldname(input)} must be less than ${max} characters`
    );
  }
}

// provjeri dalu si ispravni passwordi
function checkPassword(password, password2) {
  if (password.value === password2.value && password.value !== '') {
    console.log(password, password2);
    showSuccess(password);
    showSuccess(password2);
  } else {
    showError(password2, 'Passwords do not match');
  }
}

// Event liseners
form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkRequired([username, email, password, password2]);
  checkLenght(username, 3, 15);
  checkLenght(password, 4, 20);
  checkEmail(email);
  checkPassword(password, password2);
});
