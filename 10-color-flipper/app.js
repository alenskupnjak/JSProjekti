const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {


  let brojac = 0;
  function updateCounter() {
    const target = +counter.getAttribute('data-target');
    const increment = target / 500;
    brojac = brojac + increment;

    if (brojac < target) {
      counter.innerText = `${Math.ceil(brojac)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  }

  updateCounter();

  
});



// 
// =======================================================
// Boje
const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
  const randomNumber = getRandomNumber();
  // console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
