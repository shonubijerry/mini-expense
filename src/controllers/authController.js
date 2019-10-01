import _ from 'lodash';
import { generateToken } from '../helpers/jwt';
import { respondWithWarning, respondWithSuccess } from '../helpers/responseHandler';
import { comparePasswords, passwordHash } from '../helpers/hash';
import statusCode from '../helpers/statusCode';
import resMessage from '../helpers/responseMessages';
import { createUser, findSingleUser } from '../services/userServices';

/**
 * Signup a user
 * @param {object} req
 * @param {object} res
 * @returns {object} json response
 */
export const signup = async (req, res) => {
  const { password, email, name } = req.body;
  const findUser = await findSingleUser({ email });
  if (findUser) {
    return respondWithWarning(res, statusCode.conflict, resMessage.userExists);
  }
  const hashedPassword = await passwordHash(password);
  const data = {
    name, email, password: hashedPassword
  };
  const newUser = await createUser(data);
  const { id } = newUser.toJSON();
  const token = await generateToken({ id });
  return respondWithSuccess(
    res, statusCode.created, resMessage.resourceCreated, _.omit({ ...newUser.toJSON(), token }, ['password'])
  );
};

/**
 * Signin a user
 * @param {object} req
 * @param {object} res
 * @returns {object} json response
 */
export const signin = async (req, res) => {
  const { password, email } = req.body;
  const findUser = await findSingleUser({ email });
  if (!findUser) {
    return respondWithWarning(res, statusCode.unauthorized, resMessage.signinError);
  }
  const comparePassword = await comparePasswords(password, findUser.password);
  if (!comparePassword) {
    return respondWithWarning(
      res,
      statusCode.unauthorized,
      resMessage.signinError
    );
  }
  const { id } = findUser.toJSON();
  const payload = { id };
  const token = await generateToken(payload);
  return respondWithSuccess(res, statusCode.success, resMessage.success, _.omit({ ...findUser.toJSON(), token }, ['password']));
};
