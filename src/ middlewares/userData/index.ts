import { Request, Response, NextFunction } from 'express';

export const isPasswordValid = async (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;

  if (!password || password.length < 6) {
    return res.status(400).json({ message: 'Password must be at least 6 characters long' });
  }

  if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/\d/.test(password)) {
    return res.status(400).json({ message: 'Password must contain at least one uppercase letter, one lowercase letter, and one number' });
  }

  next();
}