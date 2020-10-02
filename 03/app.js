let brojac = 0;

document.getElementById('smanji');
// selektiraj sve btn-e

const value = document.querySelector('#value');

const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    console.log(e.currentTarget.classList);
    const style = e.currentTarget.classList;

    if (style.contains('smanji')) {
      console.log('prosao');
      brojac--; // ili let -=1
      console.log(brojac);
      value.textContent = brojac;
    } else if (style.contains('reset')) {
      brojac = 0;
      value.textContent = brojac;
    } else {
      brojac++; // ili let +=1
      value.textContent = brojac;
    }
    if (brojac > 0) {
      value.style.color = 'green';
    } else if ((brojac < 0)) {
      value.style.color = 'red';
    } else {
      value.style.color = 'black';
    }
  });
});
