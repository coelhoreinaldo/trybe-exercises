// src/middlewares/apiCredentials.js

module.exports = async function apiCredentials(req, res, next) {
  const { authorization } = req.headers;
  console.log(req.headers);

  if (!authorization || authorization.length !== 16) {
    return res.status(401).json({ message: 'Token inválido!' });
  }

  next();
};