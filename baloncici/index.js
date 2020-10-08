const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// ovim definiramo kompletne funkcije za crtanje
const c = canvas.getContext("2d");

// c.fillStyle ='orange'
// c.fillRect(100,100, 50, 50)

// c.fillStyle = 'green'
// c.fillRect(200,200, 50, 50)

// c.fillStyle = 'blue'
// c.fillRect(300,300, 50, 50)

// // Line
// c.beginPath();
// c.moveTo(50,300)
// c.lineTo(300,100)
// c.lineTo(400,200)
// c.strokeStyle = 'red'
// c.stroke();

// Arc

// for (let i = 0; i<10; i++) {
//   let x = Math.random() * window.innerWidth
//   let y = Math.random() * window.innerHeight
//   c.beginPath();

//   c.arc(x, y, 30,0, Math.PI *2,false)
//   c.strokeStyle = 'blue'
//   c.stroke()

// }

let mouse = {
  x: undefined,
  y: undefined,
};

window.addEventListener("mousemove", (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
});

function Circle(x, y, dx, dy, radius, boja) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius;
  this.boja = boja;

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);

    c.fillStyle = this.boja;
    c.fill();
    // c.strokeStyle = 'blue'
    c.strokeStyle = this.boja;
    c.stroke();
  };

  this.update = function () {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    // inner actrivity
    if (
      mouse.x - this.x < 50 &&
      mouse.x - this.x > -50 &&
      mouse.y - this.y < 50 &&
      mouse.y - this.y > -50
    ) {
      if (this.radius < 40) {
        this.radius += 1;
      }
    } else if (this.radius > this.minRadius) {
      this.radius -= 1;
    }
  };
}

let circleArray = [];

for (let index = 0; index < 100; index++) {
  let radius = Math.random() * 15 + 3;
  let x = Math.random() * (innerWidth - 2 * radius) + radius;
  let y = Math.random() * (innerHeight - 2 * radius) + radius;
  let dx = (Math.random() - 0.5) * 2;
  let dy = (Math.random() - 0.5) * 2;
  let boja = `rgba(${parseInt(Math.random() * 255)},${parseInt(
    Math.random() * 255
  )},${parseInt(Math.random() * 255)},0.9)`;

  circleArray.push(new Circle(x, y, dx, dy, radius, boja));
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  for (let index = 0; index < circleArray.length; index++) {
    circleArray[index].draw();
    circleArray[index].update();
  }
}

animate();
