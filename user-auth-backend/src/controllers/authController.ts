import { Request, Response } from 'express';
import AuthService from '../services/authService';

class AuthController {
    private authService: AuthService;

    constructor() {
        this.authService = new AuthService();
    }

    public createAccount = async (req: Request, res: Response): Promise<void> => {
        try {
            const { username, email, password } = req.body;
            const user = await this.authService.registerUser(username, email, password);
            res.status(201).json({ message: 'Account created successfully', user });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    };
}

export default AuthController;