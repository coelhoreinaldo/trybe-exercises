const data = require('../data');
const currDate = new Date();
const currYear = currDate.getFullYear();


const fantasyOrScienceFiction = () => data.books
  .filter((element) => element.genre === 'Fantasia' || element.genre === 'Ficção Científica');

fantasyOrScienceFiction(); //Livros de fantasia e ficção científica

const oldBooksOrdered = () => {
  const filtered = data.books.filter((book) => currYear - book.releaseYear > 60);
  const sorted = filtered.sort((a, b) => a.releaseYear - b.releaseYear)
  return sorted
}

oldBooksOrdered(); //Livros com mais de 60 anos ordenados do mais velho pro mais novo

const booksByAuthorBirthYear = (birthYear) => {
  const array = [];
  data.books.forEach((book) => {
    if (book.author.birthYear === birthYear)
      array.push(book.name);
  });
  return array
}

booksByAuthorBirthYear(1920); //Livros dado o nascimento das pessoas autoras

const fantasyOrScienceFictionAuthors = () => {
  const array = [];
  const fantasyFiction = data.books
    .filter((element) => element.genre === 'Fantasia' || element.genre === 'Ficção Científica');
  const forEached = fantasyFiction.forEach((book) => array.push(book.author.name));
  return array.sort();
}

fantasyOrScienceFictionAuthors(); //Autores de ficção e fantasia ordenados

const expectedResult = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

const oldBooks = () => {
  const oldBooks = oldBooksOrdered();
  return oldBooks.map((book) => book.name).sort();
  // escreva seu código aqui
}

oldBooks()