'use strict'


function removeTransition (e) {
  console.log(e);
  // 1 nacin
  // e.target.classList.remove('playing')

  // 2 nacin
  this.classList.remove('playing')
  
}


// želimo selektirati sve tipke
const sveTipke = document.querySelectorAll('.tipka')
sveTipke.forEach(tipka => {
  tipka.addEventListener('transitionend', removeTransition)
})




function sviraj (e) {
  const odabranaMuzika = document.querySelector(`audio[data-tipka="${e.keyCode}"]`)
  const stisnutaTipka = document.querySelector(`div[data-tipka="${e.keyCode}"]`)
  if (!odabranaMuzika) return
  console.log(odabranaMuzika, stisnutaTipka);
  odabranaMuzika.currentTime = 0;
  odabranaMuzika.play()

  stisnutaTipka.classList.add('playing')
}


window.addEventListener('keydown', sviraj)

