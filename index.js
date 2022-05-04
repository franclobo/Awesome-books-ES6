import startTime from './modules/clock.js';
import { books, addNew, contact, titulo, autor } from './modules/variables.js';
import { containerBooks, Libro } from './modules/list.js';

window.onload = startTime();
let dataBooks = JSON.parse(localStorage.getItem('book')) || [];

const printList = () => {
  const libro = new Libro();
  books.innerHTML = null;
  if (localStorage.getItem('book')) {
    dataBooks = JSON.parse(localStorage.getItem('book')) || [];
  }
  for (let i = 0; i < dataBooks.length; i += 1) {
    const bookStorage = document.createElement('div');
    const bookInfo = document.createElement('p');
    const deleteBtn = document.createElement('button');
    bookInfo.textContent = `"${dataBooks[i].title}" by ${dataBooks[i].author}`;
    deleteBtn.textContent = 'Remove';
    books.appendChild(bookStorage);
    bookStorage.append(bookInfo, deleteBtn);
    bookStorage.className = 'bookStorage';
    deleteBtn.addEventListener('click', () => {
      bookStorage.remove();
      libro.deleteBook(i);
    });
  }
};

printList();

const addBtn = document.getElementById('btn');
const booksBtn = document.getElementById('booksBtn');
const addBookbtn = document.getElementById('addbookBtn');
const contactBtn = document.getElementById('contactBtn');

addBtn.addEventListener('click', () => {
  const libro = new Libro(titulo.value, autor.value);
  libro.addBook(libro);
  addNew.reset();
});

booksBtn.addEventListener('click', () => {
  containerBooks.style.display = 'flex';
  addNew.style.display = 'none';
  contact.style.display = 'none';
  printList();
});

addBookbtn.addEventListener('click', () => {
  containerBooks.style.display = 'none';
  addNew.style.display = 'flex';
  contact.style.display = 'none';
});

contactBtn.addEventListener('click', () => {
  containerBooks.style.display = 'none';
  addNew.style.display = 'none';
  contact.style.display = 'flex';
});
