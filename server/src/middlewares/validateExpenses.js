import Joi from '@hapi/joi';
import { joiValidator } from '../helpers/joiValidator';
import validator from '../helpers/validator';
import { respondWithWarning } from '../helpers/responseHandler';
import statusCode from '../helpers/statusCode';
import resMessage from '../helpers/responseMessages';

/**
 * validate create expense
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {Object} error
 */
export const postExpenseFormData = (req, res, next) => {
  const schema = Joi.object().keys({
    amount: validator.amount,
    date: validator.date,
    reason: validator.reason
  });

  const errors = joiValidator(req.body, schema);
  if (!errors) {
    return next();
  }
  return respondWithWarning(res, statusCode.badRequest, resMessage.badRequest, errors);
};

/**
 * validate get expense
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {Object} error
 */
export const getExpenseFormData = (req, res, next) => {
  const schema = Joi.object().keys({
    expenseId: validator.id
  });

  const errors = joiValidator(req.params, schema);
  if (!errors) {
    return next();
  }
  return respondWithWarning(res, statusCode.badRequest, resMessage.badRequest, errors);
};
