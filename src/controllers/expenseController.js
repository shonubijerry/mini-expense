import { respondWithSuccess } from '../helpers/responseHandler';
import statusCode from '../helpers/statusCode';
import resMessage from '../helpers/responseMessages';
import { postExpense } from '../services/expenseServices';
import { checkAmount } from '../helpers/expenseHelper';

/**
 * Create an expense
 * @param {object} req
 * @param {object} res
 * @returns {object} json response
 */
export const createExpense = async (req, res) => {
  const userId = req.auth.id;
  const { amount, date, reason } = req.body;
  const stripAmount = await checkAmount(amount);
  const newExpense = await postExpense({
    userId, amount: stripAmount, date, reason
  });
  return respondWithSuccess(
    res, statusCode.created, resMessage.resourceCreated, newExpense.toJSON()
  );
};
