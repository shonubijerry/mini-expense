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
export const postExpenseFormData = (req, res, next) => {
  const createSignInSchema = Joi.object().keys({
    amount: validator.amount,
    date: validator.date,
    reason: validator.reason
  });

  const errors = joiValidator(req.body, createSignInSchema);
  if (!errors) {
    return next();
  }
  return respondWithWarning(res, statusCode.badRequest, resMessage.badRequest, errors);
};
