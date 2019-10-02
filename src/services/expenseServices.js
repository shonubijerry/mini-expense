import debug from 'debug';
import Model from '../models';
import DbServices from './dbServices';

const { Expense } = Model;

/**
 * @param {Object} data
 * @returns {Function} responseHandler
 */
export const postExpense = async (data = {}) => {
  try {
    const expense = await DbServices.create(Expense, data);
    return expense;
  } catch (error) {
    debug('app')(error);
  }
};
