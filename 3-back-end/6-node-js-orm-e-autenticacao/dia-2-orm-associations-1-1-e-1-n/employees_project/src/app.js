const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res.send(200).json({ message: 'foi' })
});

module.exports = app;