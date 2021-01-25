const fill = document.querySelector('.fill');
const empty = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', drgStart);
fill.addEventListener('dragend', drgEnd);

for (const data of empty) {
  data.addEventListener('drop', Drop);
  data.addEventListener('dragenter', drgEnter);
  data.addEventListener('dragover', drgOver);
  data.addEventListener('dragleave', drgLeave);
}

// Drag START
function drgStart() {
  console.log('drag START',this);
  // console.log(this.classList, this.className);
  this.classList.add('hold');
  setTimeout(() => {
    this.classList.add('nevidljiv');
  }, 500);
}

// DRAGEND
function drgEnd() {
  console.log(this);
  this.classList.remove('nevidljiv')
  console.log('drag END');
}

// Drag Over
function drgOver(e) {
  console.log('drag Over');
  e.preventDefault()
}

function drgEnter(e) {
  this.classList.add('hovered')
  console.log('drag Enter', this);
  e.preventDefault()
}

function drgLeave(e) {
  console.log('drag Leave',this);
  console.log('drag Leave',this.classList);
  this.classList.remove('hovered')
  console.log('Obrisao sam u programu, u domu jos stoji');
  e.preventDefault()
}

function Drop() {
  this.classList.remove('hovered')
  fill.classList.remove('hold');
  fill.classList.remove('nevidljiv');
  console.log('drag DROP',this);
  this.appendChild(fill)
}

//  =======================================================
// **********************************************************
// <h1>10 Richest People</h1>
const draggable_list = document.getElementById('draggable-list');
const check = document.getElementById('check');

const richestPeople = [
  'Jeff Bezos',
  'Bill Gates',
  'Warren Buffett',
  'Bernard Arnault',
  'Carlos Slim Helu',
  'Amancio Ortega',
  'Larry Ellison',
  'Mark Zuckerberg',
  'Michael Bloomberg',
  'Larry Page',
];

// Store listitems
const listItems = [];

let dragStartIndex;

createList();

// Insert list items into DOM
function createList() {
  [...richestPeople]
    .map((a) => ({ value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
    .forEach((person, index) => {
      // kreiramo element svaki pojedinacno
      const listItem = document.createElement('li');

      // definiramo atribut
      listItem.setAttribute('data-index', index);

      listItem.innerHTML = `
        <span class="number">${index + 1}</span>
        <div class="draggable" draggable="true" imea="${person}" id="${
        index + 1
      }">
          <p class="person-name" ime="${person}">${person}</p>
          <i class="fas fa-grip-lines"></i>
        </div>
      `;

      listItems.push(listItem);

      draggable_list.appendChild(listItem);
    });

  addEventListeners();
}

function dragStart(e) {
  console.log('Event: dragstart');
  dragStartIndex = +this.closest('li').getAttribute('data-index');
  let dragStartIndex1 = +e.target.closest('li').getAttribute('data-index');
  console.log({ dragStartIndex, dragStartIndex1 });
}

function dragEnter(e) {
  console.log('Event: dragenter', e.target);

  if (!e.target.classList.contains('person-name')) {
    console.log('-------------');

    document.querySelectorAll('.draggable-list li').forEach((lista) => {
      lista.classList.remove('odlazim');
      // lista.classList.remove('over');
    });
  } else {
    console.log('preskocio remove(odlazim)');
  }

  if (e.target.classList.contains('draggable')) {
    this.classList.add('over');
  }
}

function dragLeave(e) {
  console.log(
    'Event: dragleave',
    e.target,
    'atribut=',
    e.target.getAttribute('data-index')
  );

  if (e.target.getAttribute('data-index')) {
    this.classList.remove('over');
    this.classList.add('odlazim');
  }
}

function dragOver(e) {
  filterEvent(console.log('dragOver'), 2000);
  // console.log(this, arguments);
  e.preventDefault();
}

function dragDrop() {
  console.log('Event: drop');
  const dragEndIndex = +this.getAttribute('data-index');
  swapItems(dragStartIndex, dragEndIndex);
  document.querySelectorAll('.draggable-list li').forEach((lista) => {
    lista.classList.remove('odlazim');
  });

  this.classList.remove('over');
}

// Swap list items that are drag and drop
function swapItems(fromIndex, toIndex) {
  const itemOne = listItems[fromIndex].querySelector('.draggable');
  const itemTwo = listItems[toIndex].querySelector('.draggable');
  console.log({ itemOne, itemTwo });
  console.log(listItems[fromIndex], listItems[toIndex]);

  listItems[fromIndex].appendChild(itemTwo);
  listItems[toIndex].appendChild(itemOne);
}

// Check the order of list items
function checkOrder() {
  listItems.forEach((listItem, index) => {
    const personName = listItem.querySelector('.draggable').innerText.trim();

    if (personName !== richestPeople[index]) {
      listItem.classList.add('wrong');
    } else {
      listItem.classList.remove('wrong');
      listItem.classList.add('right');
    }
  });
}

// Dodavanje Eventlistenera
function addEventListeners() {
  const draggables = document.querySelectorAll('.draggable');
  const dragListItems = document.querySelectorAll('.draggable-list li');

  draggables.forEach((draggable) => {
    draggable.addEventListener('dragstart', dragStart);
  });

  dragListItems.forEach((item) => {
    // item.addEventListener('dragover', filterEvent(dragOver, 2000));
    item.addEventListener('dragover', dragOver);
    item.addEventListener('drop', dragDrop);
    item.addEventListener('dragenter', dragEnter);
    item.addEventListener('dragleave', dragLeave);
  });
}

// Provjera pravilnog rasporeda
check.addEventListener('click', checkOrder);

// FILTRIRA DOGADAJ
function filterEvent(funkcijaIzvana, wait = 50) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      // timeout = null;
      console.log('FILETER RADI na', timeout);
      funkcijaIzvana.apply(this, arguments);
    }, wait);
    console.clear();
  };
}
