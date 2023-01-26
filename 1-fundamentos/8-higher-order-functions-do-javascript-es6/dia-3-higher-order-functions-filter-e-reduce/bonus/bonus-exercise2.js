const data = require('../data');

const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

const reduceNames = () => {
  const names = data.books.map((book) => book.author.name).join(', ');
  console.log(names)
  // return names.reduce((acc, curr) => acc.concat(curr), '');
  // retorne seu código aqui
}

console.log(reduceNames());