// src/controllers/login.js
require('dotenv').config();
const Joi = require('joi');
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const validateBody = (body) =>
  Joi.object({
    username: Joi.string().min(5).alphanum().required()
      .messages({
        'string.min': '"username" length must be 5 characters long',
        'string.required': '"username" is required',
      }),
    password: Joi.string().min(5).required().messages({
      'string.min': '"password" length must be 5 characters long',
      'string.required': '"password" is required',
    }),
  }).validate(body);

module.exports = async (req, res, next) => {
  const { error } = validateBody(req.body);
  if (error) return next(error);
  //
  const payload = {
    username: req.body.username,
    admin: false,
  };

  if (req.body.username === 'admin' && req.body.password === 's3nh4S3gur4???') {
    payload.admin = true;
  }

  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '1h',
  });

  res.status(200).json({ token });
};
