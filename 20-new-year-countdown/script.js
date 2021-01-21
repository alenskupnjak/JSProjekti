// Pauza
const timerDisplay = document.querySelector('.display-time-left');
const krajPauze = document.querySelector('.display-time-end');
const buttons = document.querySelectorAll('[data-time]');

let odbrojavanje;

function timer(sekunde) {
  clearInterval(odbrojavanje);
  const sada = Date.now();
  const tada = sada + sekunde * 1000;
  displayEndTime(tada);
  preostaloVrijeme(sekunde);

  odbrojavanje = setInterval(() => {
    const secondLeft = Math.round((tada - Date.now()) / 1000);
    preostaloVrijeme(secondLeft);
    if (secondLeft < 0) {
      clearInterval(odbrojavanje);
      return;
    }
  }, 1000);

  console.log({ sada, tada });
}

function preostaloVrijeme(sekunde) {
  const minute = Math.floor(sekunde / 60);
  preostaleSekunde = sekunde % 60;
  const prikazi = `${minute}:${
    preostaleSekunde < 10 ? '0' : ''
  }${preostaleSekunde}`;
  timerDisplay.textContent = prikazi;
  document.title = 'Preostalo-' + prikazi;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const minute = end.getMinutes();
  const sati = end.getHours();
  krajPauze.textContent = `Vracam se u ${sati}:${
    minute < 0 ? '0' : ''
  }${minute}h`;
  // console.log(end.getSeconds(), end.getMinutes(), end.getHours());
}

function startTimer(e) {
  console.log(e.target);
  console.log(e.target.dataset.time);
  let sekunde = parseInt(e.target.dataset.time);
  console.log({ sekunde });
  console.log(typeof sekunde);
  timer(sekunde);
}

buttons.forEach((button) => {
  button.addEventListener('click', startTimer);
});

document.customForm.addEventListener('submit', (e) => {
  e.preventDefault();
  mins = e.target.minutes.value;
  timer(mins * 60);
  console.log(e);
  // e.target.reset()
});


// *****************************************
// SAT sa kazaljkama
const satKazaljka = document.querySelector('.sat');
const minutaKazaljka = document.querySelector('.minuta');
const sekundaKazaljka = document.querySelector('.sekunda');

function setSat(e) {
  const sada = new Date();
  const sekunda = sada.getSeconds();
  const sekundaKut = (sekunda / 60) * 360 + 90;
  // console.log({ sekundaKut });

  // ovo iskljucije efakat transition je radi cijeli krug....
  if (sekundaKut == 444) {
    // console.log('evo me');
    sekundaKazaljka.style.transition = 'none';
  }
  sekundaKazaljka.style.transform = `rotate(${sekundaKut}deg)`;

  const minuta = sada.getMinutes();
  const minutaKut = (minuta / 60) * 360 + 90;
  minutaKazaljka.style.transform = `rotate(${minutaKut}deg)`;
  minutaKazaljka.style.background = 'blue';

  const sat = sada.getHours();
  const satKut = (sat / 12) * 360;
  satKazaljka.style.transform = `rotate(${satKut + 90}deg)`;

  // console.log({sat, minuta, sekunda});
}

// Odbrojavamo svaku sekundu
setInterval(setSat, 1000);

// *****************************
// ODBROJAVANJE nova godina
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const loading = document.getElementById('loading');

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

// Set background year
year.innerText = currentYear + 1;

// Update countdown time
function updateCountdown() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  // Add values to DOM
  days.innerHTML = d;
  hours.innerHTML = h < 10 ? '0' + h : h;
  minutes.innerHTML = m < 10 ? '0' + m : m;
  seconds.innerHTML = s < 10 ? '0' + s : s;
}

// Show spinner before countdown
setTimeout(() => {
  loading.remove();
  countdown.style.display = 'flex';
}, 1000);

// Run every second
setInterval(updateCountdown, 1000);
