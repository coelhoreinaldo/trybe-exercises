const { book } = require("../models");

const getAll = async () => {
  const books = await book.findAll();
  return books;
};

const getById = async (bookId) => {
  const book = await book.findByPk(bookId);
  return book;
}

module.exports = { getAll, getById };
