import express from 'express';
import { signUpController } from '../controllers/login/signUpController';
import { isPasswordValid } from '../ middlewares/userData';

const router = express.Router();
router.post('/', isPasswordValid, signUpController);

export default router;