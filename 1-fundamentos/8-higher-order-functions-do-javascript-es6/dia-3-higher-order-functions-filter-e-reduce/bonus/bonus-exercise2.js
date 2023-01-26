const data = require('../data');
const currDate = new Date();
const currYear = currDate.getFullYear();

const reduceNames = () => {
  const names = data.books.map((book) => book.author.name);
  return names.reduce((acc, curr, index) => {
    if (index === names.length - 1) {
      return `${acc.concat(curr)}. `
    } 
    return`${acc.concat(curr)}, `
  }, '');
}

reduceNames();

const averageAge = () => {
  const ages = data.books.map((book) => book.releaseYear - book.author.birthYear);
  return ages.reduce((curr, acc) => curr + acc ,0) / ages.length;
}

averageAge();