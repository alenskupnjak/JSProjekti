const boxes = document.querySelectorAll('.box');

// prikazi na ekran
checkBox();

function checkBox() {
  // definiram prijelomnu točku
  const triggerBottom = (window.innerHeight / 5) * 4;

  // provjeravam svaki box
  boxes.forEach((box, index) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
}

// Za probu
window.onresize = function (e) {
  console.log(window.innerHeight);
};

// EventListener
window.addEventListener('scroll', checkBox);
