import { Router } from 'express';
import { postExpenseFormData } from '../middlewares/validateExpenses';
import { createExpense } from '../controllers/expenseController';
import { authenticateUserToken } from '../middlewares/authentication';


const router = Router();

router.post('/expenses', authenticateUserToken, postExpenseFormData, createExpense);


export default router;
