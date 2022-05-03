import Libro from "./JavaScript/list.js";
import { dataBooks } from "./JavaScript/list.js";
const booksBtn = document.getElementById('booksBtn');
const addBookbtn = document.getElementById('addbookBtn');
const contactBtn = document.getElementById('contactBtn');
const containerBooks = document.getElementById('container');
const books = document.getElementById('books');
const addNew = document.getElementById('addbook');
const contact = document.getElementById('contact');
const titulo = document.getElementById('titulo');
const autor = document.getElementById('autor');
const addBtn = document.getElementById('btn');


import { DateTime } from "./JavaScript/luxon.js";



window.onload = startTime();



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