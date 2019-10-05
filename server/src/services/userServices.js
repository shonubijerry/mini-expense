import Model from '../models';
import DbServices from './dbServices';

const { User } = Model;

/**
 * @param {Object} data
 * @returns {Function} responseHandler
 */
export const createUser = async (data = {}) => {
  const user = await DbServices.create(User, data);
  return user;
};

/**
 * @param {object} queryOption
 * @returns {object} an object containing the information of the user or null
 */
export const findSingleUser = async (queryOption) => {
  const user = await DbServices.getByOptions(User, { where: queryOption });
  return user;
};
