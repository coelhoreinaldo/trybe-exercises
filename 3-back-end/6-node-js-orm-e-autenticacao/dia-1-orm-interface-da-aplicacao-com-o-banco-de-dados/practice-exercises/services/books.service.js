const { book } = require("../models");

const getAll = async () => {
  const books = await book.findAll();
  return books;
};

const getById = async (bookId) => {
  const currBook = await book.findByPk(bookId);
  return currBook;
}

const createBook = async ({ title, author, pageQuantity }) => {
  const newBook = book.create({ title, author, pageQuantity });
  return newBook
}

module.exports = { getAll, getById, createBook };
