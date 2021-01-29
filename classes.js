//ES5
let Person5 = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person5.prototype.calculateAge = function () {
  let age = new Date().getFullYear() - this.yearOfBirth;
  console.log('Dob= ' + age);
};

let john5 = new Person5('John', 1990, 'teacher');
console.log(john5);
john5.calculateAge();

//ES6
class Person6 {
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }
  calculateAge() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
  }
  greeting() {
    console.log('Hey there!');
  }
}

const john6 = new Person6('John', 1990, 'teacher');

john6.calculateAge();
john6.greeting();

console.log('**** Lecture: Classes and subclasses****');
//ES5
var PersonES5 = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

PersonES5.prototype.calculateAge = function () {
  var age = new Date().getFullYear() - this.yearOfBirth;
  console.log(age);
};

var AthleteES5 = function (name, yearOfBirth, job, olymicGames, medals) {
  PersonES5.call(this, name, yearOfBirth, job);
  this.olymicGames = olymicGames;
  this.medals = medals;
};

AthleteES5.prototype = Object.create(PersonES5.prototype);

AthleteES5.prototype.wonMedal = function () {
  this.medals++;
  console.log(this.medals);
};
console.log(AthleteES5);

var johnAthlete5 = new AthleteES5('John', 1990, 'swimmer', 3, 10);
johnAthlete5.calculateAge();
johnAthlete5.wonMedal();

console.log('**** Lecture: ES6 ****');
class PersonES6 {
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }

  calculateAge() {
    let age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
  }

  pokus1() {
    let age = this.name + ' ' + this.job;
    console.log(age);
  }
  // ako nema funkcije u izvornoj pozovi ovu
  pokus2() {
    console.log('class perspn ES6');
    let age = this.name + ' ' + this.job;
    console.log('extend pokus2=', age);
  }
}

class Athlete6 extends PersonES6 {
  constructor(name, yearOfBirth, job, olympicGames, medals) {
    super(name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
  }

  wonMedal() {
    this.medals++;
    console.log('wonMedal= ', this.medals);
  }

  pokus2() {
    let age = this.name + ' ' + this.olympicGames + '  22';
    console.log('pokus2 u izvornoj =', age);
  }
}

const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);

johnAthlete6.wonMedal();
johnAthlete6.calculateAge();
johnAthlete6.pokus1();
johnAthlete6.pokus2();
console.log(johnAthlete6);

console.log('----- SUPER extend class--------------------------');
class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return 'atack with ' + this.weapon;
  }
}

// kreiram Elf iz charaktara
class Elf extends Character {
  constructor(name, weapon, type) {
    super(name, weapon);
    console.log('what am i?', this);
    this.type = type;
  }
}

class Ogre extends Character {
  constructor(name, weapon, color) {
    super(name, weapon);
    this.color = color;
  }
  podatak = 'podatak';
  makeFort() {
    // this is like extending our prototype.
    return console.log('strongest fort in the world made -----' + this.podatak);
  }
}

const houseElf = new Elf('Dolby', 'cloth', 'house');
//houseElf.makeFort() // error
const shrek = new Ogre('Shrek', 'club', 'green');
shrek.makeFort();
console.log(shrek.podatak);

console.log({ Ogre }, { Elf });
console.log(Ogre.prototype.isPrototypeOf(shrek));
