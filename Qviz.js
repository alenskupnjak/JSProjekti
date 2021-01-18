function Kviz(pitanje, odgovor, provjera) {
  this.pitanje = pitanje;
  this.odgovor = odgovor;
  this.provjera = provjera;

  this.upitnik = function () {
    console.log(this.pitanje);
    for (let i = 0; i < this.odgovor.length; i++) {
      console.log(i + '-' + this.odgovor[i]);
    }
  };

  this.provjeraOdgovora = function (odgovor) {
    if (odgovor === this.provjera) {
      console.log('Dali ste tocan odgovor!');
    } else {
      console.log('Netočan odgovor!');
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

let p1 = new Kviz('Koji je glavni grad Hrvatske?',['Osjek', 'Split', 'Zagreb'],2);
let p2 = new Kviz('Koji je glavni grad Njemačke?',['Minhen', 'Berlin', 'Frankfurt'],1);
let p3 = new Kviz('Koji je glavni grad Francuske?',['Pariz', 'Toluose', 'Cann'],0);
let p4 = new Kviz('Koji je glavni grad Austrije?',['Ljubljana', 'Zagreb', 'Beč'],2);

let svaPitanja = [p1, p2, p3, p4];
let n = Math.floor(Math.random() * svaPitanja.length);

svaPitanja[n].upitnik();
const odgovor = parseInt(prompt('Odaberi točan odgovor'));
svaPitanja[n].provjeraOdgovora(odgovor);
