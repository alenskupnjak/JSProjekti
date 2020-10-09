// Book constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Construtotor
function UI() {}

// Add book to list
UI.prototype.addBookToList = function (book) {
  const list = document.getElementById('book-list');
  // Create tr element
  const row = document.createElement('tr');
  // Inserts cols
  row.innerHTML = `
<td>${book.title}</td>
<td>${book.author}</td>
<td>${book.isbn}</td>
<td><a href="#" class="delete">X</a></td>
`;
  list.appendChild(row);
};

// Show Alert
UI.prototype.showAlert = function (msg, className) {
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
  }, 3000);
};


// Delete book
UI.prototype.deleteBook = function(target){
  if(target.className === 'delete'){
    target.parentElement.parentElement.remove();
  }
};



// Clear fields
UI.prototype.clearFields = function () {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
};

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
    // Add book to list
    ui.addBookToList(book);

    // Show sucess
    ui.showAlert('Knjiga uspjesno dodana', 'success');

    // Clear fields
    ui.clearFields();
  }
  e.preventDefault();
});

// Evene lisener for delete
document.getElementById('book-list').addEventListener('click', function(event){
  ui = new UI();

  ui.deleteBook(event.target);

  // Prikaži poruku uspješnog brisanja
  ui.showAlert('Knjiga uspješno obrisana', 'success')

  event.preventDefault();
})
