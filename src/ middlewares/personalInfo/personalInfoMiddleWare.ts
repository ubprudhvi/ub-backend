import { NextFunction, Request, Response } from "express";

export const personalInfoMiddleWare = (req: Request, res: Response, next: NextFunction) => {
    const { firstName, lastName, email, phoneNumber, address, message, userInterest } = req.body;

    if (!firstName || !lastName || !email || !phoneNumber || !address || !message) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    if (firstName.length < 2 || lastName.length < 2) {
        return res.status(400).json({ message: 'First name and last name must be at least 2 characters long' });
    }

    if (!/^[a-zA-Z]+$/.test(firstName) || !/^[a-zA-Z]+$/.test(lastName)) {
        return res.status(400).json({ message: 'First name and last name can only contain letters' });
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        return res.status(400).json({ message: 'Invalid email format' });
    }

    if (!/^\d{10}$/.test(phoneNumber)) {
        return res.status(400).json({ message: 'Phone number must be 10 digits long' });
    }

    if (userInterest && !Array.isArray(userInterest)) {
        return res.status(400).json({ message: 'User interest must be an array' });
    }

    next();
}