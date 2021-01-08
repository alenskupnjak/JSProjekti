const divs = document.querySelectorAll('div');
const button = document.querySelector('button');


function logText(e) {
  // console.log(e.target);
  // console.log(e.target.classList);
  
  console.log(this,'--',this.classList.value);
  // e.stopPropagation(); // stop bubbling!
  // console.log(this);
}

divs.forEach((div) => {
  div.addEventListener('click', logText, {
    capture: false,
    once: false,
  });
});

button.addEventListener(
  'click',
  () => {
    console.log('Click!!!');
  },
  {
    once: false,
  }
);

document.body.addEventListener('click',logText);
