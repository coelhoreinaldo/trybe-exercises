const bookModel = require("../models/book.model")

const getAll = async () => {
  const books = await bookModel.findAll()

  return books;
}

module.exports = { getAll }