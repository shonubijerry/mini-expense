import Joi from '@hapi/joi';
import { joiValidator } from '../helpers/joiValidator';
import validator from '../helpers/validator';
import { respondWithWarning } from '../helpers/responseHandler';
import statusCode from '../helpers/statusCode';
import resMessage from '../helpers/responseMessages';

/**
 * validate email and password
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {Object} error
 */
export const validateSigninFormData = (req, res, next) => {
  const createSignInSchema = Joi.object().keys({
    email: validator.email,
    password: validator.password
  });

  const errors = joiValidator(req.body, createSignInSchema);
  if (!errors) {
    return next();
  }
  return respondWithWarning(res, statusCode.badRequest, resMessage.badRequest, errors);
};

/**
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {Function} next middleware
 */
export const validateSignUpFormData = (req, res, next) => {
  const data = req.body;

  const rules = Joi.object().keys({
    name: validator.name,
    email: validator.email,
    password: validator.password
  });
  const schema = data.constructor === Array ? Joi.array().items(rules) : rules;
  const errors = joiValidator(data, schema);
  if (!errors) {
    return next();
  }
  return respondWithWarning(res, statusCode.badRequest, resMessage.badRequest, errors);
};
