import { Request, Response, NextFunction } from "express";
import User from "../../models/signUpModal";


export const signUpController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, password } = req.body;

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ message: 'Username already exists' });
    }
    // Create and save new user
    const user = new User({ username, password });
    await user.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
}