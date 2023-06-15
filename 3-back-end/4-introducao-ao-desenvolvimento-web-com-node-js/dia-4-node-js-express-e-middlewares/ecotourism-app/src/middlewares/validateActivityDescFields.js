const validateActivityDescFields = (req, res, next) => {
  const { description } = req.body;
  const { createdAt, rating, difficulty } = description;
  const regex = /^\d{2}\/\d{2}\/\d{4}$/;
  if (!regex.test(createdAt)) {
    return res.status(400).json({ message: 'O campo createdAt deve ter o formato \'dd/mm/aaaa\'' });
  }
  const validateRating = +rating >= 1 && +rating <= 5;
  if (!validateRating) {
    return res.status(400)
      .json({ message: 'O campo rating deve ser um número inteiro entre 1 e 5' });
  }
  const difficulties = ['Fácil', 'Médio', 'Difícil'];
  const validateDifficulty = difficulties.some((e) => e === difficulty);
  if (!validateDifficulty) {
    return res.status(400)
      .json({ message: 'O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'' });
  }
  next();
};

module.exports = validateActivityDescFields;