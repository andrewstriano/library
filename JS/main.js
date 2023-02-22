const myLibrary = [];
const addButton = document.querySelector(".add-book-button");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#numberOfPages");
const readBox = document.querySelector("#read");
const form = document.querySelector("#form");
const formContainer = document.querySelector(".form-container");
const displayBook = document.querySelector(".display-book");
const closeFormButton = document.querySelector(".close-form-button");

let bookId = 1;

function Book(title, author, numberOfPages, haveRead) {
  (this.id = bookId),
    (this.title = title),
    (this.author = author),
    (this.numberOfPages = numberOfPages),
    (this.haveRead = haveRead);

  bookId++;
}

function addBook(title, author, numberOfPages, read) {
  // Collect Form Values
  title = titleInput.value;
  author = authorInput.value;
  numberOfPages = pagesInput.value;
  read = readBox.checked;

  // Create new Book/Add to lib
  const book = new Book(title, author, numberOfPages, read);
  myLibrary.push(book);

  function createTile() {
    // create elements for the book tiles
    const bookCard = document.createElement("div");
    const header = document.createElement("div");
    const closeButton = document.createElement("button");
    const title = document.createElement("h4");
    const author = document.createElement("h5");
    const pages = document.createElement("p");
    const read = document.createElement("button");
    read.setAttribute("id", "read-button");

    // set the inner text to the values in form
    title.innerText = book.title;
    author.innerText = book.author;
    pages.innerText = book.numberOfPages;
    closeButton.innerText = "X";
    // add classes for styling
    read.classList.add("notRead");
    read.classList.add("read");
    closeButton.classList.add("close-button");
    bookCard.classList.add("book-card");

    closeButton.addEventListener("click", () => {
      bookCard.remove();
    });

    // allows user to change color and text of read button

    read.addEventListener("click", () => {
      if (read.innerText === "Read") {
        book.haveRead = false;
        read.classList.toggle("read");
        read.classList.toggle("notRead");
        read.innerText = "Not read";
      } else {
        book.haveRead = true;
        read.classList.toggle("read");
        read.classList.toggle("notRead");
        read.innerText = "Read";
      }
    });

    // Choses how to display read button based on input
    if (book.haveRead === true) {
      read.innerText = "Read";
      read.classList.toggle("notRead");
    } else {
      read.innerText = "Not Read";
      read.classList.toggle("read");
    }

    header.append(title, closeButton);
    bookCard.append(header, author, pages, read);
    displayBook.append(bookCard);
  }

  // Create Button
  const bookDiv = document.createElement("div");
  bookDiv.classList.add("book");
  const createTileButton = document.createElement("button");
  createTileButton.classList.add("book-button");
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");

  createTileButton.addEventListener("click", createTile);
  deleteButton.addEventListener("click", () => {
    bookDiv.remove();
  });
  // create button on side bar to pop up book titles
  createTileButton.innerText = book.title;
  createTileButton.dataset.Book = book.id;
  // removes books from the side bar
  deleteButton.innerText = "X";
  // adds the above to the DOM
  bookDiv.appendChild(createTileButton);
  bookDiv.appendChild(deleteButton);
  document.querySelector(".book-container").appendChild(bookDiv);
}

closeFormButton.addEventListener("click", () => {
  formContainer.style.display = "none";
});

addButton.addEventListener("click", () => {
  formContainer.style.display = "flex";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  addBook();
});
