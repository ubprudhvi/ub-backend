import { Request, Response, NextFunction } from 'express';
export const loginAuthentication = (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }
    if (password.length < 6) {
        return res.status(400).json({ message: 'Password must be at least 6 characters long' });
    }
    if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/\d/.test(password)) {
        return res.status(400).json({ message: 'Password must contain at least one uppercase letter, one lowercase letter, and one number' });
    }
    if (!username.match(/^[a-zA-Z0-9_]+$/)) {
        return res.status(400).json({ message: 'Username can only contain letters, numbers, and underscores' });
    }
    next();
};