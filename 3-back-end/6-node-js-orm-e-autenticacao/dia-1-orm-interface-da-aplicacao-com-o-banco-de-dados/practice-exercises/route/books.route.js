const route = require('express').Router();

const { bookController } = require('../controllers');

route.get('/:id', bookController.getById);
route.get('/', bookController.getAll);
route.post('/', bookController.createBook);
route.put('/:id', bookController.updateBook);
route.delete('/:id', bookController.removeBook);

module.exports = route;