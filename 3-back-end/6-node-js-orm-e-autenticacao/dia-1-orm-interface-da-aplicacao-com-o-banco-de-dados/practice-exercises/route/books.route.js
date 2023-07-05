const route = require('express').Router();

const { bookController } = require('../controllers');

route.get('/', bookController.getAll);

module.exports = route;