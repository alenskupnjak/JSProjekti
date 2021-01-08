const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  startSliderScrollLeft = slider.scrollLeft;
  console.log('mousedown');
  console.log(
    'e.pageX=',
    e.pageX,
    'slider.offsetLeft=',
    slider.offsetLeft,
    'startX=',
    startX,
    'slider.scrollLeft=',
    slider.scrollLeft
  );
});

// Ako napusti ekran potpuno
slider.addEventListener('mouseleave', () => {
  console.log('mouseleave');
  isDown = false;
  slider.classList.remove('active');
});

// Miš ima dignutu tipku
slider.addEventListener('mouseup', () => {
  console.log('mouseup');
  isDown = false;
  slider.classList.remove('active');
});

// Miš se pomiće
slider.addEventListener('mousemove', (e) => {
  console.log(' ----------mousemove -------');

  if (!isDown) return; // stop the fn from running
  e.preventDefault();
  console.log('e.pageX=',e.pageX,'slider.offsetLeft=',slider.offsetLeft);
  
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 5;

  console.log({startSliderScrollLeft, startX});
  console.log({x, walk});
  console.log('startSliderScrollLeft - walk',startSliderScrollLeft - walk);

  slider.scrollLeft = startSliderScrollLeft - walk;
});
