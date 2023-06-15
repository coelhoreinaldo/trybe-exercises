const express = require('express');
const validateActivityName = require('./middlewares/validateActivityName');
const validateActivityPrice = require('./middlewares/validateActivityPrice');
const validateActivityDescription = require('./middlewares/validateActivityDescription');
const validateActivityCreatedAt = require('./middlewares/validateActivityCreatedAt');

const app = express();

app.use(express.json());

app.post('/activities',
  validateActivityName,
  validateActivityPrice,
  validateActivityDescription,
  validateActivityCreatedAt, (req, res) => {
    res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
  });

module.exports = app;