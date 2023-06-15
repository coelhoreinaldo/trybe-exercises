const teams = require("../utils/teams");

const existingId = (req, res, next) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  if (team) {
    return next();
  }
  res.status(404).send({ message: 'ID inexistente!' });
}

module.exports = existingId;