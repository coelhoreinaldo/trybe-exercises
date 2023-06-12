const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();

const moviesPath = path.resolve(__dirname, './movies.json');

const readFile = async () => {
  try {
    const data = await fs.readFile(moviesPath);
    return JSON.parse(data);
  } catch (error) {
    console.error('Arquivo não encontrado.');
  }
};

app.get('/movies/:id', async (req, res) => {
  const currMovie = { ...req.params };
  const movies = await readFile();
  try {
    const findMovie = movies.find((movie) => movie.id === +currMovie.id);
    if (!findMovie) {
      throw new Error('meme');
    }
    res.status(200).json(findMovie);
  } catch (error) {
    res.status(404).json({ message: 'Movie not found' });
  }
});

module.exports = app;