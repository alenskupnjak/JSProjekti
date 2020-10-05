const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

const pokus = document.getElementById('pokus');

console.log(form);

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
    console.log(input.id);
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
  if (input.value.length < min) {
    showError(input, `${getFieldname(input)} must be at least 3 characters`);
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldname(input)} must be less than ${max} characters`
    );
  }
}

// provjeri dalu si ispravni passwordi
function checkPassword(password,password2) {
  if(password.value === password2.value) {
    console.log(password, password2);
    showSuccess(password);
    showSuccess(password2);
  } else {
    showError(password2, 'Passwords do not match')
  }
}

// Event liseners
form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLenght(username, 3, 15);
  checkLenght(password, 4, 20);
  checkEmail(email);
  checkPassword(password,password2)
});
