import { Router } from 'express';
import auth from './auth.routes';

const apiRouter = Router();

apiRouter.use('/api/v1', auth);

export default apiRouter;
