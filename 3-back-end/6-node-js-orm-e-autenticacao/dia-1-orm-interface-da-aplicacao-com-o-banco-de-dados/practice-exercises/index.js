require('dotenv').config();
const express = require('express');
const { booksRoute } = require('./route');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use('/books', booksRoute)

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));
