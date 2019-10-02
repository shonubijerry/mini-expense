import { Router } from 'express';
import { postExpenseFormData, getExpenseFormData } from '../middlewares/validateExpenses';
import { createExpense, getExpense, getExpenses } from '../controllers/expenseController';
import { authenticateUserToken } from '../middlewares/authentication';


const router = Router();

router.post('/expenses', authenticateUserToken, postExpenseFormData, createExpense);
router.get('/expenses', authenticateUserToken, getExpenses);
router.get('/expenses/:expenseId', authenticateUserToken, getExpenseFormData, getExpense);


export default router;
