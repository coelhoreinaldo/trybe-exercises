const data = require('../data');


const fantasyOrScienceFiction = () => data.books
.filter((element) => element.genre === 'Fantasia' || element.genre === 'Ficção Científica');

fantasyOrScienceFiction(); //Livros de fantasia e ficção científica

const currDate = new Date();
const currYear = currDate.getFullYear();

const oldBooksOrdered = () => {
  const filtered = data.books.filter((book) => currYear - book.releaseYear > 60);
  const sorted = filtered.sort((a, b) => a.releaseYear - b.releaseYear)
  return sorted
}

console.log(oldBooksOrdered()); //Livros com mais de 60 anos ordenados do mais velho pro mais novo