const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
app.use(express.json());

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

app.get('/movies', async (req, res) => res.json(await readFile()));

app.post('/movies', async (req, res) => {
  try {
    const { movie, price } = req.body;

    const movies = await readFile();
    const newMovie = {
      id: movies.length + 1,
      movie,
      price,
    };
    const updateMovies = JSON.stringify([...movies, newMovie]);
    await fs.writeFile(moviesPath, updateMovies);

    res.status(201).json(newMovie);
  } catch (error) {
    res.status(404).json({ message: 'Movie not found' });
  }
});

module.exports = app;