const { bookService } = require('../services')

const getAll = async (req, res) => {
  const books = await bookService.getAll();
  return res.status(200).json(books)
}

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await bookService.getById(id);
    return res.status(200).json(book)
  } catch (error) {
    return res.status(404).json({ message: 'Book not found' })
  }
}
module.exports = { getAll, getById };