// TRAKA
const progres = document.getElementById('traka-progres');
const nextBtTraka = document.getElementById('nextBt');
const prevBtTraka = document.getElementById('prevBt');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

// NEXT
nextBtTraka.addEventListener('click', (e) => {
  currentActive++;
  if (currentActive === circles.length) {
    currentActive = circles.length;
    nextBtTraka.disabled = true;
  }

  if (currentActive > 1) {
    prevBtTraka.disabled = false;
  }

  updateTraka();
  console.log(currentActive);
});

// PREVIOUS
prevBtTraka.addEventListener('click', (e) => {
  currentActive--;
  if (currentActive === 1) {
    currentActive = 1;
    prevBtTraka.disabled = true;
  }
  if (currentActive < circles.length) {
    nextBtTraka.disabled = false;
  }

  updateTraka();
  console.log(currentActive);
});

function updateTraka() {
  circles.forEach((data, index) => {
    if (index < currentActive) {
      data.classList.add('active');
    } else {
      data.classList.remove('active');
    }
  });
  let postotak =
    Math.floor(((currentActive - 1) / (circles.length - 1)) * 100) + '%';
  progres.style.setProperty('width', postotak);
}

// ===============================================================
// SLIDER

const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
// slazemo slide u niz
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;

nextBtn.addEventListener('click', function () {
  console.log('nextBtn', counter);

  counter++;
  carousel();
});

prevBtn.addEventListener('click', function () {
  console.log('prevBtn', counter);
  counter--;
  carousel();
});

function carousel() {
  if (counter < slides.length - 1) {
    nextBtn.style.display = 'block';
  } else {
    nextBtn.style.display = 'none';
  }

  if (counter > 0) {
    prevBtn.style.display = 'block';
  } else {
    prevBtn.style.display = 'none';
  }

  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

prevBtn.style.display = 'none';
