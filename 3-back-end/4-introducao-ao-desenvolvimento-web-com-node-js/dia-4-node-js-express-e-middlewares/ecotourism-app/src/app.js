const express = require('express');
const validateActivityName = require('./middlewares/validateActivityName');
const validateActivityPrice = require('./middlewares/validateActivityPrice');

const app = express();

app.use(express.json());

app.post('/activities', validateActivityName, validateActivityPrice, (req, res) => {
  res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
});

module.exports = app;