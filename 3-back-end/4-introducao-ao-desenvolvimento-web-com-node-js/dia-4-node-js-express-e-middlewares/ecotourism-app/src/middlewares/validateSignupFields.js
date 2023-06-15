const validateSignupFields = (req, res, next) => {
  const requiredProperties = ['email', 'password', 'firstName', 'phone'];
  const validateFields = requiredProperties.every((e) => e in req.body);
  if (!validateFields) {
    return res.status(401).json({ message: 'Campos ausentes!' });
  }

  next();
};

module.exports = validateSignupFields;