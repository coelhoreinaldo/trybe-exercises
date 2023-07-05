const { bookService } = require('../services')

const error500Message = 'Algo deu errado';

const getAll = async (req, res) => {
  const books = await bookService.getAll();
  return res.status(200).json(books)
}

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await bookService.getById(+id);
    return res.status(200).json(book)
  } catch (error) {
    console.log(error.message)
    return res.status(404).json({ message: 'Book not found' })
  }
}

const createBook = async (req, res) => {
  try {
    const bookData = req.body;
    const newBook = await bookService.createBook(bookData)
    return res.status(201).json(newBook)
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error500Message })
  }
}

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const bookData = req.body;
    const updatedBook = await bookService.updateBook(id, bookData)
    return res.status(200).json(updatedBook)
  } catch (error) {
    console.error(error.message)
    return res.status(500).json({ message: error500Message })
  }
}

module.exports = { getAll, getById, createBook, updateBook };