const route = require('express').Router();

const { bookController } = require('../controllers');

route.get('/', bookController.getAll);
route.get('/:id', bookController.getById);

module.exports = route;