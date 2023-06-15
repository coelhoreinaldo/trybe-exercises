const validateTeam = (req, res, next) => {
  const requiredProperties = ['nome', 'sigla'];
  if (requiredProperties.every((property) => property in req.body)) {
    return next(); // Chama o próximo middleware
  }
  res.sendStatus(400); // Ou já responde avisando que deu errado

};

module.exports = validateTeam;