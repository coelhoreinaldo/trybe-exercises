const data = require('../data');

const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

const reduceNames = () => {
  const names = data.books.map((book) => book.author.name);
  return names.reduce((acc, curr, index) => {
    if (index === names.length - 1) {
      return `${acc.concat(curr)}. `
    } 
    return`${acc.concat(curr)}, `
  }, '');
}

console.log(reduceNames());