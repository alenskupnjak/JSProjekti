const bojeLista = ['green', 'blue', 'orange', 'rgba(50,50,20)', '#fff'];
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];


const btn = document.getElementById('btn');
const btnhex = document.getElementById('btnhex');
const vrijednost = document.querySelector('.color');

btn.addEventListener('click', PromjeniBoju);
btnhex.addEventListener('click', PromjeniBojuHex);


function PromjeniBoju(e) {
  let boja = '';
  broj = Math.floor(Math.random() * 5);
  boja = boja + bojeLista[broj];

  vrijednost.textContent = boja;
  document.body.style.backgroundColor = boja;
}


// mijenjam boju random
function PromjeniBojuHex(e) {
  let hexboja = '#';
  for (i = 0; i < 6; i++) {
    console.log(i);
    broj = Math.floor(Math.random() * 16);
    hexboja = hexboja + hex[broj];
  }
  vrijednost.textContent = hexboja;
  document.body.style.backgroundColor = hexboja;
}
