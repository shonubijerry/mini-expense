import { respondWithSuccess, respondWithWarning } from '../helpers/responseHandler';
import statusCode from '../helpers/statusCode';
import resMessage from '../helpers/responseMessages';
import { postExpense, getOneExpense, getAllExpenses } from '../services/expenseServices';
import { calculateVAT } from '../helpers/expenseHelper';

/**
 * Create an expense
 * @param {object} req
 * @param {object} res
 * @returns {object} json response
 */
export const createExpense = async (req, res) => {
  const userId = req.auth.id;
  // console.log(userId);
  const { amount, date, reason } = req.body;
  const vatData = await calculateVAT(amount);
  const newExpense = await postExpense({
    userId, ...vatData, date, reason
  });
  return respondWithSuccess(
    res, statusCode.created, resMessage.resourceCreated, newExpense.toJSON()
  );
};


/**
 * Get an expense
 * @param {object} req
 * @param {object} res
 * @returns {object} json response
 */
export const getExpense = async (req, res) => {
  try {
    const userId = req.auth.id;
    const { expenseId } = req.params;
    const expense = await getOneExpense({ id: expenseId, userId });
    if (!expense) {
      return respondWithWarning(res, statusCode.notFound, resMessage.notFound);
    }
    return respondWithSuccess(
      res, statusCode.success, resMessage.requestSuccess, expense.toJSON()
    );
  } catch (error) {
    return respondWithWarning(res, statusCode.serverError, resMessage.serverError);
  }
};


/**
 * Get all expenses
 * @param {object} req
 * @param {object} res
 * @returns {object} json response
 */
export const getExpenses = async (req, res) => {
  const { id } = req.auth;
  const expenses = await getAllExpenses({ userId: id });
  return respondWithSuccess(
    res, statusCode.success, resMessage.requestSuccess, expenses
  );
};
