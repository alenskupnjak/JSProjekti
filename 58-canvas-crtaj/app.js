// 1 DIO crtaca ploca
const canvasGrafika = document.getElementById('draw-grafika');
const ctxGR = canvasGrafika.getContext('2d');

const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEL = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');

let size = 10;
let color = 'green';
let isPressed = false;
let x;
let y;

function drawCircle(x, y) {
  ctxGR.beginPath();
  ctxGR.arc(x, y, size, 0, Math.PI * 2, true); // Outer circle
  // ctxGR.moveTo(x, y);
  // ctxGR.arc(x, y, 35, 0, Math.PI, false);  // Mouth (clockwise)
  // ctxGR.moveTo(x-15, y-20);
  // ctxGR.arc(x-15, y-5, 5, 0, Math.PI * 2, true);  // Left eye
  // ctxGR.moveTo(x +15, y -20);
  // ctxGR.arc(x+15, y-5, 5, 0, Math.PI * 2, true);  // Right eye
  ctxGR.fillStyle = color;
  ctxGR.fill();
  // ctxGR.stroke();
}

function drawLine(x1, y1, x2, y2) {
  ctxGR.beginPath();
  ctxGR.moveTo(x1, y1);
  ctxGR.lineTo(x2, y2);
  ctxGR.strokeStyle = color;
  ctxGR.lineWidth = size * 2;
  ctxGR.stroke();
}

// drawCirc(100, 100);

// drawLine(150, 150, 175, 242);

// START crtanje
canvasGrafika.addEventListener('mousedown', (e) => {
  isPressed = true;
  // The offsetX property returns the x-coordinate the mouse cursor, relative to the target element.
  // https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_event_mouse_offsetx
  x = e.offsetX;
  y = e.offsetY;
  console.log('START crtanje -', { x }, { y });
});

// KRAJ crtanje
canvasGrafika.addEventListener('mouseup', (e) => {
  isPressed = false;
  x = 0;
  y = 0;
  console.log('KRAJ crtanje -', { x }, { y });
});

//
// CRTANJE
canvasGrafika.addEventListener('mousemove', (e) => {
  if (isPressed) {
    drawCircle(e.offsetX, e.offsetY);
    drawLine(x, y, e.offsetX, e.offsetY);
    x = e.offsetX;
    y = e.offsetY;
  }
});

increaseBtn.addEventListener('click', (e) => {
  size += 3;
  if (size > 30) {
    size = 30;
  }
  sizeEL.innerText = size;
});

decreaseBtn.addEventListener('click', (e) => {
  size -= 3;
  if (size < 3) {
    size = 2;
  }
  sizeEL.innerText = size;
});

colorEl.addEventListener('change', (e) => {
  color = e.target.value;
});

clearEl.addEventListener('click', (e) => {
  ctxGR.clearRect(0, 0, canvasGrafika.width, canvasGrafika.height);
});

// 2 DIO
// =============================
// ****************************
// saranje
const canvas = document.getElementById('draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// ctx.strokeStyle = '#bada55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 20;

let spustenoPero = false;
let lastX = 0;
let lastY = 0;
let boja = 0;
let direction = true;

function crtaj(e) {
  //  Ako nije spusteno pero
  if (!spustenoPero) return;

  ctx.strokeStyle = `hsl(${boja}, 100%, 50%)`;
  console.log(e);
  ctx.beginPath();
  // Polazna točka
  ctx.moveTo(lastX, lastY);

  // Završna točka
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  lastX = e.offsetX;
  lastY = e.offsetY;
  boja++;
  console.log('boja=', boja);

  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }

  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}

function spustiPero() {
  spustenoPero = true;
}

canvas.addEventListener('mousemove', crtaj);
canvas.addEventListener('mousedown', (e) => {
  spustenoPero = true;
  lastX = e.offsetX;
  lastY = e.offsetY;
});
canvas.addEventListener('mouseup', () => (spustenoPero = false));
canvas.addEventListener('mouseout', () => (spustenoPero = false));
