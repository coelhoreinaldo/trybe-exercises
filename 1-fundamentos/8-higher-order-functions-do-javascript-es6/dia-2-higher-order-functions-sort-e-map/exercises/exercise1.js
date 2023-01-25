const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

const formatedBookNames = (object) => object.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);

formatedBookNames(books);

const formatedAuthorNamesBirth = (object) => object.map((book) => `${book.author.name} - ${book.author.birthYear}`);

formatedAuthorNamesBirth(books);


// const nameAndAge = (object) => object.map((book) => {
//     const authorAges = {};
//     authorAges.author = book.author.name;
//     authorAges.age = book.releaseYear - book.author.birthYear;
//     console.log(authorAges);
//   });

const nameAndAge = (object) => {
  return object.map((book) => ({
    author: book.author.name,
    age: book.releaseYear - book.author.birthYear
  }
  ))
}

console.log(nameAndAge(books));