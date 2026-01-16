import { Router } from 'express';
import AuthController from '../controller/authController.js';
//rytas de autenticacion (login, register, logout)
const router = Router();

router.post('/login', AuthController.login);

export default router;