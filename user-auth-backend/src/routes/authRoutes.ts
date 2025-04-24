import { Router } from 'express';
import AuthController from '../controllers/authController';

const router = Router();
const authController = new AuthController();

const setRoutes = () => {
    router.post('/signup', authController.createAccount);
    return router;
};

export default setRoutes;