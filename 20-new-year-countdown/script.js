// SAT

const satKazaljka = document.querySelector('.sat')
const minutaKazaljka = document.querySelector('.minuta')
const sekundaKazaljka = document.querySelector('.sekunda')

function setSat(e) {
  const sada = new Date();
  const sekunda = sada.getSeconds();
  const sekundaKut = (sekunda / 60) * 360 + 90 ;
  console.log(sekundaKut);
  
  // ovo iskljucije efakat transition je radi cijeli krug....
  if (sekundaKut == 444) {
    console.log('evo me');
    sekundaKazaljka.style.transition = 'none'
  }
  sekundaKazaljka.style.transform=`rotate(${sekundaKut}deg)`

  const minuta = sada.getMinutes();
  const minutaKut = (minuta / 60) * 360 + 90;
  minutaKazaljka.style.transform=`rotate(${minutaKut}deg)`
  minutaKazaljka.style.background ='blue'

  
  const sat = sada.getHours();
  const satKut = (sat / 12) * 360;
  satKazaljka.style.transform=`rotate(${satKut +90}deg)`


  console.log(sat, minuta, sekunda);
}

setInterval(setSat, 1000);

// ODBROJAVANJE
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
