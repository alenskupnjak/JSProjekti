const canvas = document.querySelector('canvas');
// ovim definiramo kompletne funkcije za crtanje
const c = canvas.getContext('2d');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


const angular = new Image();
angular.src = 'angularjs.png';

const nodejs = new Image();
nodejs.src = 'nodejs.png';

const javascript = new Image();
javascript.src = 'javascript.png';

let mouse = {
  okidacAngular: 0,
  okidacJavascript: 0,
  okidacNodeJS: 0,
};

window.addEventListener('mousemove', (event) => {
  if (event.y > 100 && mouse.okidacAngular === 0) {
    popuniPolja(12, 80, 250, 6, poljeAngular);
    mouse.okidacAngular++;
  }

  if (event.y > 400 && mouse.okidacNodeJS === 0) {
    popuniPolja(30, 300, 250, 7, poljeNodeJS);
    mouse.okidacNodeJS++;
  }
  if (event.y > 700 && mouse.okidacJavascript === 0) {
    popuniPolja(40, 620, 250, 8, poljeJS);
    mouse.okidacJavascript++;
  }
});

//

function Ikona(x, y, dx, dy, poljeX, poljeY, range, jezik) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;

  // DRAW
  this.draw = function () {
    c.drawImage(jezik, this.x, this.y, 30, 30);
    this.x = this.x + 5;
  };

  // UPDATE
  this.update = function () {
    if (
      this.x + this.radius > poljeX + range ||
      this.x - this.radius < poljeX - range
    ) {
      this.dx = -this.dx;
    }
    if (
      this.y + this.radius > poljeY + range ||
      this.y - this.radius < poljeY - range
    ) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
  };
}

let poljeAngular = [];
let poljeJS = [];
let poljeNodeJS = [];
// let pticeArray = [];

function popuniPolja(poljeX, poljeY, range, brojIkona, program) {
  console.log(program);

  for (let index = 0; index < brojIkona; index++) {
    let x = poljeX + Math.random() * range - 15;
    let y = poljeY + Math.random() * range - 15;
    let dx = Math.random() * 2;
    let dy = Math.random() * 2;
    // let boja = `rgba(${parseInt(Math.random() * 255)},${parseInt(
    //   Math.random() * 255
    // )},${parseInt(Math.random() * 255)},0.9)`;

    if (program === poljeAngular) {
      poljeAngular.push(
        new Ikona(x, y, dx, dy, poljeX, poljeY, range, angular)
      );
    }

    if (program === poljeJS) {
      poljeJS.push(new Ikona(x, y, dx, dy, poljeX, poljeY, range, javascript));
    }

    if (program === poljeNodeJS) {
      poljeNodeJS.push(new Ikona(x, y, dx, dy, poljeX, poljeY, range, nodejs));
    }
  }
}


function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  for (let index = 0; index < poljeAngular.length; index++) {
    poljeAngular[index].draw();
    poljeAngular[index].update();
  }

  for (let index = 0; index < poljeJS.length; index++) {
    poljeJS[index].draw();
    poljeJS[index].update();
  }

  for (let index = 0; index < poljeNodeJS.length; index++) {
    poljeNodeJS[index].draw();
    poljeNodeJS[index].update();
  }
}

animate();
