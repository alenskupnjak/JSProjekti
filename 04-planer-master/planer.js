console.log(document.head);

let but = document.getElementById('p1button');
console.log(but);
console.log(but.parentNode.parentNode.parentNode.id);

head = document.querySelectorAll('header');
console.log(head);
console.log(head[1]);
console.log(head);
console.log(head);
console.log(head[1].nextElementSibling);
console.log(head[1].previousElementSibling);

nadi = document.querySelectorAll('section');
console.log(nadi);
console.log(nadi[0]);
console.log(nadi[0].previousElementSibling);
console.log(nadi[0].childNodes);
console.log(nadi[0].nextElementSibling);
console.log(nadi[1]);

let data = but.parentNode.id;
console.log(data);
console.log(but.previousElementSibling);
console.log(but.childNodes);

li = document.querySelector('li');
console.log(li);

console.log(li.previousElementSibling);

li = document.querySelectorAll('li');
console.log(li);
li.forEach((data) => {
  console.log(data);
  console.log(data.children);
  console.log(data.nextElementSibling);
});

li = document.querySelector('section');
console.log(li);

li = document.querySelectorAll('section');
console.log(li);
li.forEach((element) => {
  console.log(element);
});

let element = document.getElementById('pasivan-projekt').children[1];
console.log(element);

function promjeni() {
  console.log(event);
  console.log(event.target);
  console.log(event.target.id);
  let dugme = document.getElementById(event.target.id);
  console.log(dugme);
  let status = dugme.parentNode.parentNode.parentNode.id;
  console.log('status=' + status);
  let index = dugme.parentNode.id;
  console.log('index=' + index);

  if (status === 'aktivan-projekt') {
    status = 'pasivan-projekt';
    setTimeout((data) => {
      dugme.textContent = 'Gotovo';
    }, 3000);

    dugme.textContent = 'Stigo u pasivu';
  } else {
    status = 'aktivan-projekt';
    setTimeout((data) => {
      dugme.textContent = 'Aktivno';
    }, 3000);
    dugme.textContent = 'Stigo u aktivu';
  }

  console.log(status);
  // startna tocka
  let element = document.getElementById(status).children[1];
  console.log(element);

  let zakaci = document.getElementById(index);

  console.log(zakaci);

  element.append(zakaci);
  li = document.querySelector('li');
  console.log(li);
}

function PromjeniBoju() {
  console.log(event);
  console.log(event.target);
  console.log(event.target.id);
  let element = document.getElementById(event.target.id);
  element.className = 'infokratko';

  setTimeout((data) => {
    element.className = 'info';
    element.textContent = 'Informacije';
  }, 3000);
  console.log(element);
  element.textContent = 'Na kratko mijenjam boju';
  element.className = 'infokratko';
}

const p1button = document.getElementById('p1button');
p1button.addEventListener('click', promjeni);
const p2button = document.getElementById('p2button');
p2button.addEventListener('click', promjeni);
const p3button = document.getElementById('p3button');
p3button.addEventListener('click', promjeni);

const btnInfo1 = document.getElementById('info1');
btnInfo1.addEventListener('click', PromjeniBoju);
const btnInfo2 = document.getElementById('info2');
btnInfo2.addEventListener('click', PromjeniBoju);
const btnInfo3 = document.getElementById('info3');
btnInfo3.addEventListener('click', PromjeniBoju);
