const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

const navCoords = nav.getBoundingClientRect();
console.log(triggers);
console.log(
  'Navigacija Top=',
  navCoords.top,
  '  Navigacija left',
  navCoords.left
);

// Ulaz
function handleEnter(e) {
  // console.log(e.target, this);
  background.classList.add('open');

  // Prikaz se odvija u dva koraka:
  // 1. prikazije se pozadina dodavanje class ('trigger-enter')
  e.target.classList.add('trigger-enter'); //  isto kao: this.classList.add('trigger-enter');

  // 2. nakon jedne sekunde dodaje se class ('trigger-enter-active')
  setTimeout(() => {
    if (this.classList.contains('trigger-enter')) {
      this.classList.add('trigger-enter-active');
    }
  }, 1000);

  // odredi trenutni polozaj box-a, ovaj je trenutno selektiran
  const dropdownCoords = e.target
    .querySelector('.dropdown')
    .getBoundingClientRect();

  // definiramo koordinate
  console.log(dropdownCoords.top, dropdownCoords.left);

  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left,
  };

  background.style.setProperty('width', `${coords.width}px`);
  background.style.setProperty('height', `${coords.height}px`);
  background.style.setProperty(
    'transform',
    `translate(${coords.left}px, ${coords.top}px)`
  );
}

// ********************************************
// Izlaz iz menia
function handleLeave(e) {
  // this.classList.remove('trigger-enter', 'trigger-enter-active');
  e.target.classList.remove('trigger-enter', 'trigger-enter-active');
  background.classList.remove('open');
}

// *********************************************************
// Ulaz u proces
triggers.forEach((trigger) => {
  trigger.addEventListener('mouseenter', handleEnter);
});
triggers.forEach((trigger) =>
  trigger.addEventListener('mouseleave', handleLeave)
);
