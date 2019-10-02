import { Router } from 'express';
import auth from './auth.routes';
import expenses from './expenses.routes';

const apiRouter = Router();

apiRouter.use('/api/v1', auth);
apiRouter.use('/api/v1', expenses);

export default apiRouter;
