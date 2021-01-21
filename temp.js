// const obj = {
//   name: 'Billy',
//   sing: function() {
//     return 'llala ' + this.name + '!'
//   },
//   singAgain: function() {
//     return this.sing()
//   }
// }

// console.log(obj.singAgain());

// function importantPerson() {
//   console.log(this.name)
// }

// const name = 'Sunny';
// const obj1 = { name: 'Cassy', importantPerson: importantPerson}
// const obj2 = { name: 'Jacob', importantPerson: importantPerson}

// console.log(importantPerson());

// importantPerson();

// const a = function() {
//   console.log('a',this)
//   const b = function() {
//     console.log('b',this)
//     const c = {
//       hi: function() {
//      console.log('c',this)
//     }}
//     c.hi()
// //   }
// //   b()
// // }

// // a.call()

// console.log('**********************************************');

// //JS is weird:
// const obja = {
//   name: 'Billy',
//   sing: function() {
//     console.log(this) // in this case, it's a method on an object.
//     let anotherFunc = function() {
//       console.log(this)// this points to windows!
//     }
//   }
// }

// console.log(obja.sing());
// console.log(obja.name);

// console.log('**********************************************');
// const character = {
//   name: 'Simon',
//   getCharacter() {
//     return this.name;
//   },
//   getChar: function () {
//     return this.name;
//   }
// };

// const giveMeTheCharacterNOW = character.getCharacter.bind(character);
// const giveMeTheCharacterNOW1 = character.getCharacter;
// const giveMeTheCharacterNOW2 = character.getChar.bind(character);

// //How Would you fix this?
// console.log('?', giveMeTheCharacterNOW());

// console.log(giveMeTheCharacterNOW1());
// console.log(giveMeTheCharacterNOW2());

const number = 100;
const string = 'Jay';
let obj1 = {
  value: 'obj1',
  name: 'alen',
};

let obj2 = {
  value: 'obj2',
};
let obj3 = obj2;

function change(number, string, obj1, obj2) {
  console.log(number);
  console.log(string);
  console.log(typeof obj1);
  console.log(obj2);
  console.log('*******************');
  number = number * 10;
  string = 'Pete';
  obj1 = 'kiki';
  console.log(typeof obj1);
  obj2.value = 'obj2mis';
  console.log(number);
  console.log(string);
  console.log(obj1);
  console.log(obj2);
}

change(number, string, obj1, obj2);
console.log('+++++++++++++++++');
//Guess the outputs here before you run the code:
console.log(number);
console.log(string);
console.log(obj1.value);
console.log(obj2.value);
console.log(obj3.value);

let person = {
  age: 28,
  name: 'alen',
  hobi: ['sport', 'hodanje'],
};

console.log(person);

let person1 = person;
let person2 = { ...person };
console.log(person1);
console.log(person2);

person.name = 'konj';
console.log('person', person);
console.log('person1', person1);
console.log('person2', person2);

// **************************************
function vowelsAndConsonants(s) {
  console.log(s);
  console.log(s.split);

  s.split('').forEach((slovo) => {
    if (slovo === 'a') {
      console.log(slovo);
    } else if (slovo === 'e') {
      console.log(slovo);
    } else if (slovo === 'i') {
      console.log(slovo);
    } else if (slovo === 'o') {
      console.log(slovo);
    } else if (slovo === 'u') {
      console.log(slovo);
    }
  });
  s.split('').forEach((slovo) => {
    if (
      slovo !== 'a' &&
      slovo !== 'e' &&
      slovo !== 'i' &&
      slovo !== 'o' &&
      slovo !== 'u'
    ) {
      console.log(slovo);
    }
  });
}

vowelsAndConsonants('javascriptloops');

function obrni(s) {
  try {
    let rezultat = s.split('').reverse().join('');
    console.log(rezultat);
  } catch {
    console.log('error');
    console.log(s);
  }
}

obrni(Number(123456));
