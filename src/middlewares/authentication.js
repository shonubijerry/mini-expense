/* eslint-disable max-len */
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
export const authenticateUserToken = async (req, res, next) => {
  let token = req.headers.authorization;
  if (!token) {
    return respondWithWarning(res, statusCode.unauthorized, resMessage.noToken);
  }
  if (token.startsWith('Bearer ')) {
    token = token.slice(7, token.length);
  }
  try {
    const { key } = await verifyToken(token);
    req.auth = key;
    next();
  } catch (error) {
    return respondWithWarning(res, statusCode.unauthorized, formatJWTErrorMessage(error.message));
  }
};
