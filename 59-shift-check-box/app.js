const checkbox1 = document.querySelectorAll('input');
const checkbox = document.querySelectorAll('.inbox input');
const checkbox3 = document.querySelectorAll('.inbox input[type="checkbox"]');
const clearAllCheck = document.querySelector('.btn');

console.log(checkbox1, checkbox, checkbox3);

let zadnjiCheck;

//  dodajemo na sve check-boxove eventlisenere
checkbox.forEach((checkbox) => {
  checkbox.addEventListener('click', hendleCheck);
});

function hendleCheck(e) {
  // e.target = this
  // provjeri dali je shift spusten
  let izmeduTriger = false;
  if (e.shiftKey && e.target.checked) {
    checkbox.forEach((data) => {
      if (data === e.target || data === zadnjiCheck) {
        console.log('trigger');
        izmeduTriger = !izmeduTriger;
      }

      if (izmeduTriger) {
        data.checked = true;
      }
    });
  }
  zadnjiCheck = e.target;
  console.dir(zadnjiCheck);
}



// Ocisti sve check-boxove
function ocisti() {
  checkbox.forEach((data) => {
    data.checked = false;
  });
}

clearAllCheck.addEventListener('click', ocisti);
