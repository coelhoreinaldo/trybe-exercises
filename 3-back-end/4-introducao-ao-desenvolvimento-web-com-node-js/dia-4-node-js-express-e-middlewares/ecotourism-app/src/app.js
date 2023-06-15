const express = require('express');
const validateActivityName = require('./middlewares/validateActivityName');
const validateActivityPrice = require('./middlewares/validateActivityPrice');
const validateActivityDescription = require('./middlewares/validateActivityDescription');
const validateActivityDescFields = require('./middlewares/validateActivityDescFields');
const validateSignupFields = require('./middlewares/validateSignupFields');
const generateToken = require('./utils/generateToken');
const apiCredentials = require('./middlewares/apiCredentials');

const app = express();

app.use(express.json());

app.post('/activities',
  validateActivityName,
  validateActivityPrice,
  validateActivityDescription,
  validateActivityDescFields,
  apiCredentials, (req, res) => {
    res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
  });

app.post('/signup', validateSignupFields, (req, res) => {
  const token = generateToken();
  res.status(200).json({ token });
});

module.exports = app;