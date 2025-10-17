import { Request, Response } from "express";
import PersonalInfo from "../../models/personalInfo";

// Extend Express Request interface to include 'user'
declare module 'express-serve-static-core' {
    interface Request {
        user?: {
            _id: string;
            // add other user properties if needed
        }
    }
}

export const personalInfoController = async (req: Request, res: Response) => {
    try {
        // Here you would typically save the data to a database
        const userInfo = await PersonalInfo.create(req.body);
        if (!userInfo) {
            return res.status(400).json({ message: 'Failed to create personal information' });
        }

        // For demonstration purposes, we'll just return the data back
        res.status(200).json({
            message: 'Personal information received successfully',
            data: userInfo
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}