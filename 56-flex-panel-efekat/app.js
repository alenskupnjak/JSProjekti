'use strict'

const panels = document.querySelectorAll('.panel')


panels.forEach(panel=> {
  panel.addEventListener('click', toggleOpen)
})
panels.forEach(panel=> {
  panel.addEventListener('transitionend', spustiSlova)
})

function toggleOpen(e) {
  console.log(e);
  console.log(e.target);
  e.target.classList.toggle('open')
}

function spustiSlova (e) {
  console.log(e);
  e.target.classList.toggle('open-active')
}