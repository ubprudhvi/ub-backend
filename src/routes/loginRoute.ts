import express from 'express';
import { loginController } from '../controllers/login/loginController';
import { isPasswordValid } from '../ middlewares/userData';

const router = express.Router();
router.post('/', isPasswordValid, loginController);

export default router;