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

app.put('/movies/:id', async (req, res) => {
  try {
    const currMovie = { ...req.params };
    const { movie, price } = req.body;
    const movies = await readFile();

    const updatedMovie = movies.find((mov) => mov.id === +currMovie.id);
    updatedMovie.movie = movie;
    updatedMovie.price = price;

    const updatedMovies = JSON.stringify(movies, null, 2);
    await fs.writeFile(moviesPath, updatedMovies);

    res.status(200).json(updatedMovie);
    console.log(updatedMovie);
  } catch (error) {
    res.status(404).json({ message: 'Movie not found' });
  }
});

app.delete('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const movies = await readFile();
    const filteredMovies = movies.filter((mov) => mov.id !== +id);
    const updatedMovies = JSON.stringify(filteredMovies, null, 2);
    await fs.writeFile(moviesPath, updatedMovies);
    res.status(204).end();
  } catch (error) {
    res.status(404).json({ message: 'Movie not found' });
  }
});

module.exports = app;