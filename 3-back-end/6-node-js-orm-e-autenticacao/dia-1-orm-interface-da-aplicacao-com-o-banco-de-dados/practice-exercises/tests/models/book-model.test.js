const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const bookModel = require('../../models/book.model');

describe('O model de book', () => {
  const book = bookModel(sequelize, dataTypes);
  const newBook = new book();

  describe('possui o nome "book"', () => {
    checkModelName(book)('book');
  });

  describe('possui as propriedades "title", "author", "pageQuantity" e "publisher"', () => {
    ['title', 'author', 'pageQuantity', 'publisher'].forEach(checkPropertyExists(newBook));
  });
});