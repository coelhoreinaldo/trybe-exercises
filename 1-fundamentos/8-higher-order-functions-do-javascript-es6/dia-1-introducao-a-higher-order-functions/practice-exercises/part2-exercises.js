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

const authorBornIn1947 = () => {
  const findAuthor = books.find((item) => item.author.birthYear === 1947);
  return findAuthor.author.name
}

authorBornIn1947(); //Stephen King

const smallerName = () => {
  let nameBook;
  books.forEach((item) => {
    if (!nameBook || item.name.length < nameBook.length) {
      nameBook = item.name;
    }
  });
  return nameBook;
}

smallerName(); //Duna

const getNamedBook = () => {
  let object;
  books.forEach((item) => {
    if (item.name.length === 26) {
      object = item
    }
  });
  return object
}
getNamedBook(); // o objeto que tem As crônicas de Gelo e Fogo

const getNamedBook2 = () => books.find((book) => book.name.length === 26);

getNamedBook2(); // o objeto que tem As crônicas de Gelo e Fogo

function everyoneWasBornOnSecXX() {
  return books.every((book) => book.author.birthYear >= 1900 && book.author.birthYear <= 1999 )
}

everyoneWasBornOnSecXX(); //false

function someBookWasReleaseOnThe80s() {
  return books.some((book) => {book.releaseYear < 1990 && book.releaseYear >= 1980});
}

someBookWasReleaseOnThe80s(); //true

const authorUnique = () => {
  return books.every((book) =>
    !books.some((bookSome) =>
      (bookSome.author.birthYear === book.author.birthYear)
      && (bookSome.author.name !== book.author.name)));
}

console.log(authorUnique());