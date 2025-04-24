import { body, validationResult } from 'express-validator';

export const validateEmail = () => {
  return body('email')
    .isEmail()
    .withMessage('Please enter a valid email address');
};

export const validatePassword = () => {
  return body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long')
    .matches(/\d/)
    .withMessage('Password must contain a number');
};

export const validateUsername = () => {
  return body('username')
    .isLength({ min: 3 })
    .withMessage('Username must be at least 3 characters long')
    .isAlphanumeric()
    .withMessage('Username must be alphanumeric');
};

export const validateUserInput = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};