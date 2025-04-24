import { User } from '../models/userModel';
import { hash } from 'bcrypt';
import { validateEmail, validatePassword } from '../utils/validation';

export class AuthService {
    async registerUser(username: string, email: string, password: string) {
        if (!validateEmail(email)) {
            throw new Error('Invalid email format');
        }
        if (!validatePassword(password)) {
            throw new Error('Password does not meet criteria');
        }

        const hashedPassword = await hash(password, 10);
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        await newUser.save();
        return newUser;
    }
}