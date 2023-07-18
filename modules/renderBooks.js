import Bookshelf from './bookShelf.js';

const bookCtr = document.getElementById('book-ctr');

export default function RenderJsonObjects(JsonObjectsArray) {
  bookCtr.innerHTML = '';
  JsonObjectsArray.forEach((book) => {
    const bookElement = document.createElement('div');
    bookElement.className = 'book';
    bookElement.innerHTML = `<p>"${book.name}" by ${book.author}</p>
                        <button>Remove</button>`;
    bookElement.querySelector('button').addEventListener('click', () => {
    Bookshelf.removeBook(book.name);
    bookElement.remove();
    });
    bookCtr.appendChild(bookElement);
  });
}