import { NextFunction, Request, Response, response } from "express";
import User from "../../models/signUpModal";
import jwt from 'jsonwebtoken'

export const loginController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username }).select('+password');
        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }
        const isMatch = await user.isValidPassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' });

        res.status(200).json({ message: 'Login successful', token });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err });
    }
};