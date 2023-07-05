const { book } = require("../models");

const getAll = async () => {
  const books = await book.findAll({
    order: [['title', 'ASC']]
  });
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

const updateBook = async (id, { title, author, pageQuantity }) => {
  const [updatedBook] = await book.update(
    { title, author, pageQuantity },
    { where: { id } }
  )
  console.log(updatedBook);
  return updatedBook
}

const removeBook = async (id) => {
  const deletedBook = await book.destroy(
    { where: { id } }
  )
  console.log('book to be deleted', deletedBook)

  return deletedBook;
}

const getByAuthor = async (author) => {
  const books = await book.findAll(
    {
      where: { author },
      order: [['title', 'ASC']]
    })
  return books;
}

module.exports = { getAll, getById, createBook, updateBook, removeBook, getByAuthor };
