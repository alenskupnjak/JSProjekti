'use strict';

setTimeout(function timeout() {
  console.log('Start!');
}, 10000);

let a = 1;

let Funkcija00 = (num) => {
  let b = 2;
  console.log('num', num + b);

  let Funkcija01 = (num2) => {
    console.log({ num2 }, num2 + a);
    // drugaFunkcija(200)  ne radi
  };

  Funkcija01.pokus = 'pokusni text';
  Funkcija01(100);

  console.log(Funkcija01.pokus);

  let Funkcija_02 = (num3) => {
    let c = 15;
    console.log({ num3 }, num3 + c);
    Funkcija01(150);
    setTimeout(function timeout() {
      console.log('U funkciji 2!');
    }, 1000);
  };

  Funkcija_02(200);
};

Funkcija00(3);
Funkcija00.call(3);
Funkcija00.apply(3);

console.log('********************************');

function bigBrother() {
  function littleBrother() {
    return 'it is me!';
  }

  return littleBrother();
  console.log(littleBrother);
  function littleBrother() {
    return 'littleBrother: no me!';
  }

  console.log(littleBrother);
  function littleBrother() {
    return 'littleBrother: 01!';
  }

  console.log(littleBrother);
  function littleBrother() {
    return 'littleBrother: 02! zadnji';
  }
}

let data = bigBrother();

console.log(data);

console.log('********************************');

let dog = {
  sound: 'waw',
  age: 40,
  talkA: function () {
    console.log('this A', this.sound, '-', this);
  },
  talkB() {
    console.log('this B', this.sound, '-', this);
  },
  talkC() {
    let unutarnja = ()=>{
      console.log('UNUTARNJI this C', this.sound, '-', this);
    };
    console.log('VANJSKI this C', this.sound, '-', this);
    return unutarnja();
  },
  talkD: () => {
    console.log('this D', this.sound, '-', this);
  },
};

dog.talkA();
dog.talkB();
dog.talkC();
dog.talkD();

console.log('------------------');

let talkFunctionA = dog.talkA;
let boundFunction = talkFunctionA.bind(dog);
boundFunction();

let talkFunctionB = dog.talkB.bind(dog);
talkFunctionB();

let talkFunctionC = dog.talkC.bind(this);
talkFunctionC();

console.log('------------------');

const wizard = {
  name: 'Merlin',
  health: 50,
  heal(a = 0, b = 0) {
    return (this.health += a + b);
  },
};

const archer = {
  name: 'Merlin',
  health: 30,
};

console.log('1', archer);
wizard.heal.call(archer, 10, 21);
console.log('2', archer);

console.log(wizard);
console.log(wizard.heal());

console.log('xxxxxxxxxxxxxxxxx');

let b = {
  name: ' name a',
  say() {
    console.log(this);
  },
};
let c = {
  name: ' name c',
  say() {
    return function () {
      console.log(this);
    };
  },
};
let d = {
  name: ' name d',
  say() {
    return () => {
      console.log(this);
    };
  },
};

b.say();
c.say()();
d.say()();

console.log('------------------');
const number = 100;
const string = 'Jay';
let obj1 = {
  value: 'a',
};

let obj2 = {
  value: 'b',
};
let obj3 = obj2;

console.log('00', obj1);
console.log('00', obj2);
console.log('00', obj3);

function change(number, string, obj1, obj2) {
  number = number * 10;
  string = 'Pete u funkciji';
  obj1 = obj2;
  obj2.value = 'podatak';
  console.log('funkcija=', { number });
  console.log('funkcija=', { string });

  console.log('F-', obj1);
  console.log('F-', obj2);
  console.log('F-', obj3);
}

change(number, string, obj1, obj2);

console.log({ number });
console.log({ string });
console.log('glo=', obj1.value);
console.log('glo=', obj2.value);
console.log('glo=', obj3.value);

let polje = [];
console.log(polje);
console.log(polje.__proto__);
console.log(polje.__proto__.__proto__);

function aa() {}
console.log(aa);
console.log(aa.__proto__);
console.log(aa.__proto__.__proto__);

let objekt = {};
console.log({ objekt });
console.log(objekt.__proto__);
