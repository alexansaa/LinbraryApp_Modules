export default class Bookshelf {
  static shelf = [];
  
  static someBooks = [
    {
      name: 'Don Quijote de la Mancha',
      author: 'Miguel de Cervantes Saavedra',
    },
    {
      name: 'La ilitada',
      author: 'Homero',
    },
  ];

  constructor(name, author) {
    this.name = name;
    this.author = author;
  }

  static addNewBook(name, author) {
    const newBook = new Bookshelf(name, author);
    Bookshelf.shelf.push(newBook);
    Bookshelf.updateData();
  }

  static removeBook(name) {
    Bookshelf.shelf = Bookshelf.shelf.filter((item) => item.name !== name);
    Bookshelf.updateData();
  }

  static updateData() {
    localStorage.setItem('books', JSON.stringify(Bookshelf.shelf));
  }

  static loadData() {
    Bookshelf.shelf = JSON.parse(localStorage.getItem('books'));
    if (Bookshelf.shelf === null || Bookshelf.shelf.length === 0) {
      Bookshelf.shelf = Bookshelf.someBooks;
    }
  }
}