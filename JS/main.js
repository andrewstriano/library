const myLibrary = [];
const addButton = document.querySelector(".add-book-button");
// addButton.addEventListener("click");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#numberOfPages");
const readBox = document.querySelector("#read");
const notRead = document.querySelector("#not-read");
const submitButton = document.querySelector("#submit");
const form = document.querySelector("#form");

let bookId = 1;

function Book(title, author, numberOfPages, haveRead) {
  (this.id = bookId),
    (this.title = title),
    (this.author = author),
    (this.numberOfPages = numberOfPages),
    (this.haveRead = haveRead);

  bookId++;
}

function addBookToLibrary(title, author, numberOfPages, read) {
  const book = new Book(title, author, numberOfPages, read);
  myLibrary.push(book);
}

function addBook(title, author, numberOfPages, read) {
  // Collect Form Values
  title = titleInput.value;
  author = authorInput.value;
  numberOfPages = pagesInput.value;
  read = readBox.value;

  // Create new Book/Add to lib
  const book = new Book(title, author, numberOfPages, read);
  myLibrary.push(book);

  //Create Button
  const newButton = document.createElement("button");
  newButton.classList.add("book");
  newButton.addEventListener("click", () => {
    alert(book.title);
  });

  document.querySelector(".book-container").appendChild(newButton);
  newButton.innerText = book.title;
  newButton.dataset.Book = book.id;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  addBook();
});
