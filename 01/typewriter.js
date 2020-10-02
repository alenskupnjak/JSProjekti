// RIJESENJE  JEDAN => funkcija
const Tipkac = function (txtElement, poljeRijeci, cekajNaKrajuRijeci = 5000) {
  this.txtElement = txtElement;
  this.poljeRijeci = poljeRijeci;
  this.txt = '';
  this.wordIndex = 0;
  this.cekajNaKrajuRijeci = parseInt(cekajNaKrajuRijeci, 10);
  this.type();
  this.isDeleting = false;
};

Tipkac.prototype.type = function () {
  // trenutni index rijeci
  const current = this.wordIndex % this.poljeRijeci.length;
  console.log('Pozdrav', this.wordIndex, this.poljeRijeci.length);

  // get full text of current word
  const fullTxt = this.poljeRijeci[current];
  console.log(current, fullTxt);

  // Check if deleting
  if (this.isDeleting) {
    // Remove char
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    // Add char
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  // Insert txt into element
  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

  // Initial Type Speed
  let typeSpeed = 300;

  // ubrzavamo brisanje
  if (this.isDeleting) {
    typeSpeed /= 2;
  }

  // If word is complete
  if (!this.isDeleting && this.txt === fullTxt) {
    // Make pause at end
    typeSpeed = this.cekajNaKrajuRijeci;
    // Set delete to true
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    // Move to next word
    this.wordIndex++;
    // Pause before start typing
    typeSpeed = 1500;
  }

  // neprestano ponavlja
  setTimeout(() => {
    return this.type();
  }, typeSpeed);
};

// RIJESENJE DVA => class-a
//***************************************** */
// ES6 CLASS
class TypeWriter {
  constructor(txtElement, poljeRijeci, cekajNaKrajuRijeci = 5000) {
    this.txtElement = txtElement;
    this.poljeRijeci = poljeRijeci;

    // text koji ce se mijenjati
    this.txt = '';

    // inicijalno postavljamo na prvu rijec u polji
    this.wordIndex = 0;
    this.cekajNaKrajuRijeci = parseInt(cekajNaKrajuRijeci, 10);
    this.type();
    
    // inicijalno upisujemo text
    this.isDeleting = false;
  }

  type() {
    // trenutni index rijeci
    const current = this.wordIndex % this.poljeRijeci.length;
    console.log('Pozdrav', this.wordIndex, this.poljeRijeci.length);

    // get full text of current word
    const fullTxt = this.poljeRijeci[current];
    console.log(current, fullTxt);

    // Check if deleting
    if (this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 300;

    // ubrzavamo brisanje ako smo u tome modu
    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if (this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.cekajNaKrajuRijeci;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 1500;
    }

    // neprestano ponavlja
    setTimeout(() => {
      return this.type();
    }, typeSpeed);
  }
}

// Inicijalizacija DOM loading
document.addEventListener('DOMContentLoaded', init);

// Init page
function init() {
  const txtElement = document.querySelector('.txt-type');
  const poljeRijeci = JSON.parse(txtElement.getAttribute('data-words'));
  const cekajNaKrajuRijeci = txtElement.getAttribute('data-wait');

  // Inisijalno pokretanje, saljemo u beskonačnu petlju
  // new Tipkac(txtElement, poljeRijeci, cekajNaKrajuRijeci);
  new TypeWriter(txtElement, poljeRijeci, cekajNaKrajuRijeci);
}
