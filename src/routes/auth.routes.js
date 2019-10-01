import { Router } from 'express';
import { validateSigninFormData, validateSignUpFormData } from '../middlewares/validateAuth';
import { signin, signup } from '../controllers/authController';


const router = Router();

router.post('/auth/signup', validateSignUpFormData, signup);
router.post('/auth/signin', validateSigninFormData, signin);


export default router;
