export const booksBtn = document.getElementById('booksBtn');
export const addBookbtn = document.getElementById('addbookBtn');
export const contactBtn = document.getElementById('contactBtn');
export const containerBooks = document.getElementById('container');
export const books = document.getElementById('books');
export const addNew = document.getElementById('addbook');
export const contact = document.getElementById('contact');
export const titulo = document.getElementById('titulo');
export const autor = document.getElementById('autor');
export const addBtn = document.getElementById('btn');
export let dataBooks = JSON.parse(localStorage.getItem('book')) || [];

export default class Libro {
  constructor(title, author) {
    this.dataBooks = [title, author];
    this.title = title;
    this.author = author;
  }

  deleteBook = (index) => {
    dataBooks.splice(index, 1);
    localStorage.setItem('book', JSON.stringify(dataBooks));
  }

  addBook = (libro) => {
    dataBooks.push(libro);
    localStorage.setItem('book', JSON.stringify(dataBooks));
  }
}