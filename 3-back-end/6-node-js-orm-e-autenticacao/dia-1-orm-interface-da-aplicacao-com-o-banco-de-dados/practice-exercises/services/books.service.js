const { book } = require("../models");

const getAll = async () => {
  const books = await book.findAll();
  return books;
};

module.exports = { getAll };
