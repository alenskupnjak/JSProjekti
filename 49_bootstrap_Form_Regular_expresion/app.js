// FORMA 01
document.querySelectorAll('.form-control-wave label').forEach((label) => {
  label.innerHTML = label.innerText
    .split('')
    .map((slovo, ind) => {
      return `<span style="transition-delay:${ind * 30}ms">${slovo}</span>`;
    })
    .join('');
});

// ***************************************************
// ****************************************************
// FORMA 02
// Form blur=(LOST FOCUS)  Event Listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

// ******************************************************************
function validateName() {
  const name = document.getElementById('name');
  //  prva dva znak mora biti slova, max duljina zapisa 10
  const re = /^[a-zA-Z]{2,10}$/;

  if (!re.test(name.value)) {
    name.classList.add('is-invalid');
  } else {
    name.classList.remove('is-invalid');
  }
}

// ********************************************************
function validateZip() {
  const zip = document.getElementById('zip');
  // Mora poceti sa brojkom i imati 5 znakova, onda zarez, i 4 znaka broja
  // i mora završiti sa brojem
  // let re = /^[0-9]{5}(-[0-9]{4})$/;

  // Mora poceti sa brojkom i imati 5 znakova, onda znak minus, opcija je ( 4 znaka broja)
  // i mora završiti sa brojem
  // ako je opcija mora biti cijela ispunjena!
  re = /^[0-9]{5}(-[0-9]{4})?$/;

  if (!re.test(zip.value)) {
    zip.classList.add('is-invalid');
  } else {
    zip.classList.remove('is-invalid');
  }
}

// ****************************************************
function validateEmail() {
  const email = document.getElementById('email');
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if (!re.test(email.value)) {
    email.classList.add('is-invalid');
  } else {
    email.classList.remove('is-invalid');
  }
}

// ********************************************************
function validatePhone() {
  const phone = document.getElementById('phone');

  // backslash \( znaci da zelimo samo znak ( . ? upitnik je optional
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

  if (!re.test(phone.value)) {
    phone.classList.add('is-invalid');
  } else {
    phone.classList.remove('is-invalid');
  }
}
