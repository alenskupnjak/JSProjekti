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
