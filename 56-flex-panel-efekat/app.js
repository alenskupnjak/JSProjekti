'use strict';

const panels = document.querySelectorAll('.panel');
const panelsBT = document.querySelectorAll('.panelBT');




// Otvori ovu stranicu
function toggleOpen(e) {
  // prije
  panels.forEach((panel) => {
    if (panel !== e.target) {
      panel.classList.remove('open');
    }
  });
  console.log(e.target);
  e.target.classList.toggle('open');
}

// Otvori ovu stranicu
function toggleOpenBT(e) {
  // prije
  panelsBT.forEach((panel) => {
      panel.classList.remove('active');
  });
  console.log(e.target);
  e.target.classList.add('active');
}


// Spustanje slova
function spustiSlova(e) {
  console.log(e);
  e.target.classList.toggle('open-active');
}



//  Event listener
panels.forEach((panel) => {
  panel.addEventListener('click', toggleOpen);
});
panels.forEach((panel) => {
  panel.addEventListener('transitionend', spustiSlova);
});

panelsBT.forEach((panel) => {
  panel.addEventListener('click', toggleOpenBT);
});


