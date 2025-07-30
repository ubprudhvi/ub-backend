import { Request, Response, NextFunction } from "express";
import User from "../../models/loginModal";


export const loginController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, password } = req.body;

    console.log(username, password);
    // Check if user already exists
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