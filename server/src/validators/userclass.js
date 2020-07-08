import { check } from 'express-validator';

exports.userClassCreateValidator = [
  check('id_class')
    .not()
    .isEmpty()
    .withMessage('Class ID is required'),
  check('id_user')
    .not()
    .isEmpty()
    .withMessage('User ID is required'),    
]