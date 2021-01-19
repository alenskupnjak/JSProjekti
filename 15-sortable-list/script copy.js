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
    .map((a) => {
      // kreirasm objekt
      return { value: a, sortlista: Math.random() };
    })
    .sort((a, b) => {
      // console.log(a, b);
      // sortiram bo brojevima, randomnumber
      return a.sortlista - b.sortlista;
    })
    .map((a) => {
      // console.log(a);
      // vracam samo vrijednost imena+prezimena, random mi ne treba
      return a.value;
    })
    .forEach((person, index) => {
      const listItem = document.createElement('li');

      listItem.setAttribute('data-index', index);

      listItem.innerHTML = `
        <span class="number">${index + 1}</span>
        <div class="draggable" draggable="true" id="${index + 1}">
          <p class="person-name" id="p${index + 1}">${person}</p>
          <i class="fas fa-grip-lines"></i>
        </div>
      `;

      listItems.push(listItem);

      draggable_list.appendChild(listItem);
    });

  addEventListeners();
}

function dragStart(e) {
  console.log('Event: ', 'dragstart', e.target);
  dragStartIndex = +this.closest('li').getAttribute('data-index');
}

function dragEnter(e) {
  console.log('Event: ', 'dragenter', e.target);
  this.classList.add('over');
}

function dragLeave(e) {
  console.log('Event: ', 'dragleave target=', e.target, 'this=', this);
  this.classList.remove('over');
}

function dragOver() {
  console.log('Event: ', 'dragover', this, 'Arguments=', arguments);
}

function dragDrop(e) {
  console.log('Event: ', 'drop', e.target);
  const dragEndIndex = +this.getAttribute('data-index');
  swapItems(dragStartIndex, dragEndIndex);
  this.classList.remove('over');
}

function mousedown(e) {
  console.log('mousedown: ', e.target);
}

// Swap list items that are drag and drop
function swapItems(fromIndex, toIndex) {
  const itemOne = listItems[fromIndex].querySelector('.draggable');
  const itemTwo = listItems[toIndex].querySelector('.draggable');

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
    item.addEventListener('mousedown', mousedown);
  });
}

check.addEventListener('click', checkOrder);

// dogadaj
function filterEvent(funkcijaIzvana, wait = 50) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      // timeout = null;
      console.log('FILETER RADI na', timeout);
      funkcijaIzvana.apply(this, arguments);
    }, wait);
    // console.clear();
  };
}
