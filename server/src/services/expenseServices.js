import Model from '../models';
import DbServices from './dbServices';

const { Expense } = Model;

/**
 * @param {Object} data
 * @returns {Function} responseHandler
 */
export const postExpense = async (data = {}) => {
  const expense = await DbServices.create(Expense, data);
  return expense;
};

/**
 * @param {Object} data
 * @returns {Function} responseHandler
 */
export const getOneExpense = async (data = {}) => {
  const options = {
    where: {
      ...data
    }
  };
  const expense = await DbServices.getByOptions(Expense, options);
  return expense;
};

/**
 * @param {Object} data
 * @returns {Function} responseHandler
 */
export const getAllExpenses = async (data = {}) => {
  const options = {
    where: {
      userId: data.userId,
    },
    order: [
      ['updatedAt', 'DESC']
    ]
  };
  const expense = await DbServices.getAllRecord(Expense, options);
  return expense;
};
