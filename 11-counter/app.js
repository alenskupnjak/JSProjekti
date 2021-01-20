// Key CODE
const insert = document.getElementById('insert');

window.addEventListener('keydown', (event) => {
  insert.innerHTML = `
  <div class="key">
  ${event.key === ' ' ? 'Space' : event.key} 
  <small>event.key</small>
</div>

<div class="key">
  ${event.keyCode}
  <small>event.keyCode</small>
</div>

<div class="key">
  ${event.code}
  <small>event.code</small>
</div>
  `;
});

// ==================================================
// COUNTER *************************
// set inital value to zero
let count = 0;
// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains('decrease')) {
      count--;
    } else if (styles.contains('increase')) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = 'green';
    }
    if (count < 0) {
      value.style.color = 'red';
    }
    if (count === 0) {
      value.style.color = '#222';
    }
    value.textContent = count;
  });
});
