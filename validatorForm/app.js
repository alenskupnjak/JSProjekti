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

// prikaži uspjeh
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// provjeri email
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(input.value);

  // if (re.test(input.value.trim())) {
  //   showSuccess(input);
  // } else {
  //   showError(input, 'Email is not valid');
  // }
}

// Event liseners
form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(e);

  // kontrola user name
  if (username.value === '') {
    showError(username, 'Username is required');
  } else {
    showSuccess(username);
  }

  // kontrola Email
  if (email.value === '') {
    showError(email, 'Email is required');
  } else if (!checkEmail(email.value)) {
    showError(email, 'Email is not valid!');
  } else {
    showSuccess(email);
  }

  // kontrola Email
  if (password.value === '') {
    showError(password, 'Password is required');
  } else {
    showSuccess(password);
  }

  // kontrola password2
  if (password2.value === '') {
    showError(password2, 'Password2 is required');
  } else {
    showSuccess(password2);
  }
});
