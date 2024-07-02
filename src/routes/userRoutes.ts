import { Router } from 'express';
import { userController } from '../controllers/userController';
import { userValidation } from '../validation/users.validation';

const router = Router();

router.post('/register', userValidation.createUserSchema, userController.register);
router.post('/login', userValidation.loginUserSchema, userController.login);

export default router;
