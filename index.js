import Bookshelf from './modules/bookShelf.js';
import RenderJsonObjects from './modules/renderBooks.js';
import timeUpdate from './modules/timeUpdate.js';
import InitializeNavigation from './modules/navigation.js';

const addBtn = document.getElementById('add-btn');

timeUpdate();

Bookshelf.loadData();
RenderJsonObjects(Bookshelf.shelf);

InitializeNavigation();

addBtn.addEventListener('click', () => {
  const name = document.getElementById('name').value;
  const author = document.getElementById('author').value;

  Bookshelf.addNewBook(name, author);
  RenderJsonObjects(Bookshelf.shelf);
});
