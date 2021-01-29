function KvizFunction(pitanje, odgovor, provjera) {
  this.pitanje = pitanje;
  this.odgovor = odgovor;
  this.provjera = provjera;

  this.upitnik = function () {
    for (let i = 0; i < this.odgovor.length; i++) {
      console.log(i + '-' + this.odgovor[i]);
    }
  };

  this.provjeraOdgovora = function (odgovor) {
    console.log(this.odgovor);
    
    if (odgovor === this.provjera) {
      console.log('Dali ste tocan odgovor!');
    } else {
      console.log('Netočan odgovor kod funkcije !');
    }
  };
}


// Kviz.prototype.upitnik = function () {
//   console.log(this.pitanje);
//   for (let i = 0; i < this.odgovor.length; i++) {
//     console.log(i + '-' + this.odgovor[i]);
//   }
// };

// Kviz.prototype.provjeraOdgovora = function (odgovor) {
//   if (odgovor === this.provjera) {
//     console.log('Dali ste tocan odgovor!');
//   } else {
//     console.log('Netočan odgovor!');
//   }
// };

let p1 = new KvizFunction(
  'Koji je glavni grad Hrvatske?',
  ['Osjek', 'Split', 'Zagreb'],
  2
);

console.log('01-', p1.pitanje);
console.log('01-', p1.odgovor);
console.log('01-', p1.provjera);



let p2 = new KvizFunction(
  'Koji je glavni grad Njemačke?',
  ['Minhen', 'Berlin', 'Frankfurt'],
  1
);
let p3 = new KvizFunction(
  'Koji je glavni grad Francuske?',
  ['Pariz', 'Toluose', 'Cann'],
  0
);
let p4 = new KvizFunction(
  'Koji je glavni grad Austrije?',
  ['Ljubljana', 'Zagreb', 'Beč'],
  2
);

let svaPitanjaFunction = [p1, p2, p3, p4];
let n = Math.floor(Math.random() * svaPitanjaFunction.length);

svaPitanjaFunction[n].upitnik();
const odgovor = parseInt(prompt('Odaberi točan odgovor'));
svaPitanjaFunction[n].provjeraOdgovora(odgovor);

//  CLASS
class KvizClass {
  constructor(pitanje, odgovor, provjera) {
    this.pitanje = pitanje;
    this.odgovor = odgovor;
    this.provjera = provjera;
  }

  upitnik() {
    console.log(this.pitanje);
    for (let i = 0; i < this.odgovor.length; i++) {
      console.log(i + '-' + this.odgovor[i]);
    }
  }

  provjeraOdgovora() {
    if (odgovor === this.provjera) {
      console.log('Dali ste tocan odgovor!');
    } else {
      console.log('Netočan odgovor!');
    }
  }
}

// Kviz.prototype.upitnik = function () {
//   console.log(this.pitanje);
//   for (let i = 0; i < this.odgovor.length; i++) {
//     console.log(i + '-' + this.odgovor[i]);
//   }
// };

// Kviz.prototype.provjeraOdgovora = function (odgovor) {
//   if (odgovor === this.provjera) {
//     console.log('Dali ste tocan odgovor!');
//   } else {
//     console.log('Netočan odgovor!');
//   }
// };

p1 = new KvizClass(
  'Class - Koji je glavni grad Hrvatske?',
  ['Osjek', 'Split', 'Zagreb'],
  2
);
console.log(p1.pitanje);

p2 = new KvizClass(
  'Class - Koji je glavni grad Njemačke?',
  ['Minhen', 'Berlin', 'Frankfurt'],
  1
);
p3 = new KvizClass(
  'Class - Koji je glavni grad Francuske?',
  ['Pariz', 'Toluose', 'Cann'],
  0
);
p4 = new KvizClass(
  'Class - Koji je glavni grad Austrije?',
  ['Ljubljana', 'Zagreb', 'Beč'],
  2
);

let svaPitanjaClass = [p1, p2, p3, p4];
n = Math.floor(Math.random() * svaPitanjaClass.length);

svaPitanjaClass[n].upitnik();
svaPitanjaClass[n].provjeraOdgovora(parseInt(prompt('Odaberi točan odgovor')));

//  Zadatak sa interneta
// *******************************
//

console.log(
  ' **** Pronadi najveci broj s kojim su dva broja djeljiva dva broja ***'
);
function nadiBroj(a, b) {
  let min, max, rezultat;
  if (a > b) {
    max = a;
    min = b;
  } else {
    max = b;
    min = a;
  }
  if (max % min === 0) {
    return 'Broj odmah= ' + min;
  }
  for (let index = 1; index < max; index++) {
    if (max % index === 0 && min % index === 0) {
      rezultat = index;
    }
  }

  return 'Broj =' + rezultat;
}

console.log('01-', nadiBroj(15, 2055));
console.log('02-', nadiBroj(4, 2));
console.log('03-', nadiBroj(201, 21));
console.log('04-', nadiBroj(20, 30));
