const container = document.getElementById('book-list');

document.getElementById('book-list').addEventListener('click', (e) => {
  console.log(e.target);
  console.log(e.target.getAttribute('class'));
});


const redovi = document.querySelectorAll('.red');
const copyredovi = [...redovi];
copyredovi.forEach((e) => {
  console.log(e);
  console.log(e.getAttribute('tr'));
});

console.log('document.body=', document.body);
console.log('document.URL=', document.URL);
console.log('document.domain=', document.domain);

// Obriši prvi child
document.getElementById('obrisichild').addEventListener('click', (e) => {
  console.log(container);
  container.removeChild(container.firstChild);
});


// Obriši last child
const buttonchild = document
  .getElementById('obrisiLastchild')
  .addEventListener('click', (e) => {
    console.log(container);
    container.removeChild(container.lastChild);
  });


const buttonFocus = document.getElementById('focus');
buttonFocus.focus();

buttonFocus.addEventListener('click', (e) => {
  console.log(e);
});

// Replace  child
function setValues() {
  const list = document.getElementById('book-list');
  // Create tr element
  const row = document.createElement('tr');

  //  kreiram klasu
  row.classList.add('redovi');

  // Inserts cols
  row.innerHTML = `
    <td class="red">Replace1</td>
    <td>Replace</td>
    <td>Replace</td>
    <td>Replace</td>
    <td><a href="#" moguLOvitovo="start" class="delete">X</a></td>
`;

  console.log(list.childNodes[2]);

  list.replaceChild(row, list.firstChild);
  list.replaceChild(row, list.childNodes[4]);
  // container.removeChild(container.lastChild);
  const redovi = document.querySelectorAll('.red');
  console.log(redovi);
}

// ************************************************************************
// CLASS BOOK
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

//  CLASS Store SPREMANJE PODATAKA NA LOCALstorage
class Store {
  // dodaj knjigu u local store
  static addBooks(book) {
    let knjige;
    if (localStorage.getItem('knjige') === null) {
      knjige = [];
    } else {
      knjige = JSON.parse(localStorage.getItem('knjige'));
    }
    knjige.push(book);
    localStorage.setItem('knjige', JSON.stringify(knjige));
  }

  // obriši iz local storagea
  static deleteBook(target) {
    // Obriši iz local storage
    let text = target.parentElement.parentElement.children[1].textContent;
    let knjige;
    if (localStorage.getItem('knjige') === null) {
      console.log('tutu');
      knjige = [];
    } else {
      knjige = JSON.parse(localStorage.getItem('knjige'));
    }

    knjige.forEach((element, index) => {
      if (text === element.title) {
        knjige.splice(index, 1);
      }
      localStorage.setItem('knjige', JSON.stringify(knjige));
    });
  }


  // učitaj nakon refreša stranicu
  static refreshPage() {
    let knjiga = JSON.parse(localStorage.getItem('knjige'));
    localStorage.removeItem('knjige');
    if (knjiga) {
      // Instiate UI
      const ui = new UI();
      knjiga.forEach((e, index) => {
        ui.addBookToList(e, index + 1);
        Store.addBooks(e);
      });

      const redovi1 = document.querySelectorAll('.redovi');
      console.log(redovi1);
      redovi1.forEach((e) => {
        console.log(e.childNodes);
        console.log(e.childNodes[1]);
        console.log(e);
        console.log(e.classList.contains('zuji'));
        console.log(e.innerText);
        console.log(e.getAttribute('class'));
        console.log(e.getAttribute('td'));
        console.log(e.childNodes[6]);
        // console.log( e.childNodes[6].getAttribute('data-id'));
        e.setAttribute('td', 'novisetup');
      });

      const deleteid = document.querySelectorAll('.delete');
      console.log(deleteid.length);
      deleteid.forEach((e, index) => {
        console.log(e);
        console.log(e.attributes);
        console.log(e.childNodes);
        console.log(e.getAttribute('mogulovitovo'));
        console.log('Js str 366 - ', e.dataset.id);

        e.setAttribute('dodano', 'dodatak');
        e.setAttribute('mogulovitovo', 'start +++');
        if (index === deleteid.length - 1) {
          e.removeAttribute('mogulovitovo');
        }
      });
    }
  }
}

//  CLASS UI controler
class UI {
  // dodajem knjigu
  addBookToList(book, rb) {
    const list = document.getElementById('book-list');

    // Create tr element
    const row = document.createElement('tr');

    // klasa se može dodati i ovako
    row.className = 'prvaklasa';

    // Dodaj klasu
    row.classList.add('redovi');
    // Dodaj klasu
    row.classList.toggle('zuji');

    row.style.color = 'magenta'
    row.style.backgroundColor = 'transparent'
    row.style.fontFamily = 'Areal'


    const ubaci = document.createTextNode('<div>ajmmo</div>');

    let element = document.createElement('div');
    element.className = 'message';

    var textNode = document.createTextNode('Hello world!');
    element.appendChild(textNode);

    // Inserts cols
    row.innerHTML = `
  <td class="red">${rb}</td>
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="#" mogulovitovo="start" data-id ="${Math.random()}"class="delete">X</a></td>
  `;
    list.appendChild(element);
    list.appendChild(row);
  }

  // ****************************************************
  // Show Alert
  showAlert(msg, className) {
    const div = document.createElement('div');
    // Add class
    div.className = `alert ${className}`;

    // Add text
    div.appendChild(document.createTextNode(msg));

    //Get parent
    const container = document.querySelector('.container');

    const form = document.querySelector('#book-form');

    // Insert alert
    container.insertBefore(div, form);
    container.insertAdjacentHTML('afterend', '<p class="afterend">afterend AAAA</p>');
    container.insertAdjacentHTML('afterbegin', '<p class="afterbegin">afterbegin BBBB</p>');
    container.insertAdjacentHTML('beforeend', '<p class="beforeend">beforeEnd  CCCC </p>');
    container.insertAdjacentHTML('beforebegin', '<p class="beforebegin"> beforebegin DDDD </p>');

    // Timeout after 3 sec
    setTimeout(function () {
      document.querySelector('.alert').remove();
      document.querySelector('.afterend').remove();
      document.querySelector('.afterbegin').remove();
      document.querySelector('.beforeend').remove();
      document.querySelector('.beforebegin').remove();
    }, 3000);
  }

  // Delete book
  deleteBook(target) {
    if (target.className === 'delete') {
      console.log('target.className, delete', target.className);
      target.parentElement.parentElement.remove();
    }
  }

  // Clear fields
  clearFields() {
    document.getElementById('title').value = 'title';
    document.getElementById('author').value = 'author';
    document.getElementById('isbn').value = 'isbn';
  }
}

// SUBMIT
document.getElementById('book-form').addEventListener('submit', function (e) {
  // get form values
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;

  // Instatiate Book
  const book = new Book(title, author, isbn);

  // Instiate UI
  const ui = new UI();

  // Validate
  if (title === '' || author === '' || isbn === '') {
    // error alert
    ui.showAlert('Please fill the all fields', 'error');
  } else {
    // odredi duljinu zapisa
    let redniBroj = document.querySelector('#book-list').children.length;

    // Add book to list
    ui.addBookToList(book, redniBroj);

    // add book to localstorage
    Store.addBooks(book);

    // Show sucess
    ui.showAlert('Knjiga uspjesno dodana', 'success');

    // Clear fields
    ui.clearFields();
  }
  e.preventDefault();
});

// Event-lisener for delete
document
  .getElementById('book-list')
  .addEventListener('click', function (event) {
    ui = new UI();

    // obriši knjigu sa liste
    ui.deleteBook(event.target);

    // obriši knjigu iz local storagea
    Store.deleteBook(event.target);

    // Prikaži poruku uspješnog brisanja
    ui.showAlert('Knjiga uspješno obrisana', 'success');

    event.preventDefault();
  });

// DOM Load event
document.addEventListener('DOMContentLoaded', Store.refreshPage());

if (document.readyState) {
  console.log('da, spreman sam');
  console.log(document.charset);
}

function outerHtml() {
  alert(container.outerHTML);
  alert(container.innerText)
}

const getValue = document.getElementById('blog-test');
console.log('getValue.innerHTML= ',getValue.innerHTML);
console.log('getValue.innerText= ',getValue.innerText);
console.log('getValue.textContent= ',getValue.textContent);
