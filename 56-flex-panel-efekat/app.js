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
  console.log(e);
  console.log(e.path);
  console.log(e.target);
  console.log(e.target.parentNode);

  let target = -1;
  do {
    target++;
  } while (!e.path[target].classList.contains('panel'));

  console.log({ target });
  console.log(e.path[target]);

  e.path[target].classList.toggle('open');
}

// Spustanje slova
function spustiSlova(e) {
  let target = -1;
  do {
    target++;
  } while (!e.path[target].classList.contains('panel'));
  e.path[target].classList.toggle('open-active');
}

//  Event listener
panels.forEach((panel) => {
  console.log('*******************************');
  panel.addEventListener('click', toggleOpen);
});
panels.forEach((panel) => {
  panel.addEventListener('transitionend', spustiSlova);
});

// ********************************
// donji panel
// Otvori ovu stranicu
function toggleOpenBT(e) {
  // prije
  panelsBT.forEach((panel) => {
    panel.classList.remove('active');
  });
  console.log(e.target);
  e.target.classList.add('active');
}

panelsBT.forEach((panel) => {
  panel.addEventListener('click', toggleOpenBT);
});
