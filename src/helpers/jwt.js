import jwt from 'jsonwebtoken';
import { SECRET_KEY, EXPIRATION_DURATION } from '../config/constants';
import responseMessages from './responseMessages';

/**
 * Function to generate token from userId and role
 * @param {object} data
 * @param {object} options
 * @returns {string} generated token
 */
export const generateToken = async (data, options = { expiresIn: EXPIRATION_DURATION }) => {
  const token = await jwt.sign({ key: data }, SECRET_KEY, options);
  return token;
};

/**
 * Verify a token
 * @param {object} token
 * @returns {Object} decoded data
 */

export const verifyToken = async (token) => jwt.verify(token, SECRET_KEY);

/**
   * Verify a token
   * @param {object} token
   * @returns {Object} decoded data
   */

export const formatJWTErrorMessage = (message) => {
  let formattedMessage;
  if (message.includes('invalid') || message.includes('malformed')) {
    formattedMessage = responseMessages.invalidSession;
  }
  if (message.includes('expired')) {
    formattedMessage = responseMessages.expiredSession;
  }
  return formattedMessage;
};
