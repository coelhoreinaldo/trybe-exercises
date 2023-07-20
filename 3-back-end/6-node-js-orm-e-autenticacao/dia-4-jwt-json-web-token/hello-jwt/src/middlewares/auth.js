const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

function extractToken(bearerToken) {
  return bearerToken.split(' ')[1];
}

module.exports = async (req, res, next) => {
  const bearerToken = req.header('Authorization');

  const token = extractToken(bearerToken);

  if (!token) {
    const err = new Error('Token not found');
    err.statusCode = 401;
    return next(err);
  }

  try {
    const payload = jwt.verify(token, secret);
    req.user = payload;

    return next();
  } catch (err) {
    err.statusCode = 401;
    return next(err);
  }
};