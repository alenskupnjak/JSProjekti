const container = document.getElementById('book-list');

// Obriši priv child
document.getElementById('obrisichild').addEventListener('click', (e) => {
  console.log(container);
  container.removeChild(container.firstChild);
});

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// SPREMANJE PODATAKA NA LOCALstorage
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
    }
  }
}

// UI controler
class UI {
  // dodajem knjigu
  addBookToList(book, rb) {
    const list = document.getElementById('book-list');
    // Create tr element
    const row = document.createElement('tr');
    // Inserts cols
    row.innerHTML = `
  <td>${rb}</td>
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="#" class="delete">X</a></td>
  `;
    list.appendChild(row);
  }

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

    // Timeout after 3 sec
    setTimeout(function () {
      document.querySelector('.alert').remove();
    }, 2000);
  }

  // Delete book
  deleteBook(target) {
    if (target.className === 'delete') {
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

// eventlistener
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

// Evene lisener for delete
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
