const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

console.log(smallCups);

smallCups.forEach((cup, index) => {
  // console.log({ index }, smallCups[index].classList);

  cup.addEventListener('click', (e) => {
    console.log(e.target);
    console.log({ index }, e.target.classList.contains('full'));

    if (e.target.classList.contains('full')) {
      e.target.classList.remove('full');
      smallCups.forEach((cup, idx3) => {
        if (idx3 > index) {
          smallCups[idx3].classList.remove('full');
        }
      });
    } else {
      smallCups.forEach((cup, idx2) => {
        if (idx2 <= index) {
          cup.classList.add('full');
        }
      });
    }
    updateBigCup();
  });
});

function updateBigCup() {
  let puneCase = document.querySelectorAll('.cup-small.full').length;
  let totalCups = +smallCups.length;
  console.log({ puneCase }, typeof puneCase, { totalCups });

  if (puneCase === 0) {
    percentage.style.setProperty('visibility', 'hidden');
    percentage.style.setProperty('height', '0');
    liters.innerText = '2L';
  } else {
    percentage.innerText = `Puno= ${Math.floor((puneCase / totalCups) * 100)}%`;
    percentage.style.setProperty('visibility', 'visible');
    percentage.style.setProperty('height', `${(puneCase / totalCups) * 330}px`);

    // Komentar preostalog dijela
    if (puneCase === totalCups) {
                // remained.style.setProperty('display', 'none');
      remained.style.setProperty('visibility', 'hidden');
      remained.style.setProperty('height', '0');

    } else {
                // remained.style.setProperty('display', 'block');
      remained.style.setProperty('visibility', 'visible');
      remained.style.setProperty('height', '30px');
      // remained.innerText = `Preostalo= ${(1 - puneCase / totalCups) * 100}%`;
      console.log({liters});
      
      liters.innerText = `${2 * (1 - puneCase / totalCups)*1000}ml`;
    }
  }
}
