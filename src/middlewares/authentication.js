/* eslint-disable max-len */
import { findSingleUser } from '../services/userServices';
import { respondWithWarning } from '../helpers/responseHandler';
import statusCode from '../helpers/statusCode';
import resMessage from '../helpers/responseMessages';
import { verifyToken, formatJWTErrorMessage } from '../helpers/jwt';

/**
   * Method to generate token
   * @param {object} req
   * @param {object} res
   * @param {Function} next
   * @returns {Function} next middleware
   */
export const authenticateUserToken = (req, res, next) => {
  let token = req.headers.authorization;
  if (!token) {
    return respondWithWarning(res, statusCode.unauthorized, resMessage.noToken);
  }
  if (token.startsWith('Bearer ')) {
    token = token.slice(7, token.length);
  }
  try {
    const { key } = verifyToken(token);
    req.auth = key;
    return next();
  } catch (error) {
    return respondWithWarning(res, statusCode.unauthorized, formatJWTErrorMessage(error.message));
  }
};

/**
 * Function to check if a user exists
 * @param {Object} req this is the request object
 * @param {Object} res this is the response object
 * @param {Function} next this is the next function
 * @returns {Function} response
 */
export const validUserById = async (req, res, next) => {
  const { id } = req.auth;
  const findUser = await findSingleUser({ id });
  if (!findUser) {
    return respondWithWarning(res, statusCode.unauthorized, resMessage.notAUser);
  }
  const { dataValues } = findUser;
  req.user = dataValues;
  return next();
};
