import { NextFunction, Request, Response } from "express";
import PersonalInfo from "../../models/personalInfo";

export const updateUserPersonalInfoController = (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ message: 'user id not Invalid' })
    }
    else {
        const updatedUserInfo = PersonalInfo.findByIdAndUpdate(id, { $set: req.body }, {
            new: true,
        })
        return updatedUserInfo.then((data) => {
            if (!data) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json({
                message: 'User personal information updated successfully',
                data
            });
        }).catch((error) => {
            res.status(500).json({ message: 'Server error', error });
        });
    }
}