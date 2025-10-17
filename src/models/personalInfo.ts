import mongoose from "mongoose";

export interface IUserPersonalInterface extends mongoose.Document {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: string;
    userId?: mongoose.Schema.Types.ObjectId;
    s3Url?: string;
    thumbnailUrl?: string;
    message: string;
    userInterest: string[]
}

const personalInfoSchema = new mongoose.Schema<IUserPersonalInterface>({
    firstName: { type: String, required: true, unique: true },
    lastName: { type: String, required: true, unique: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false },
    s3Url: { type: String, default: '' },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    thumbnailUrl: { type: String, default: '' },
    message: { type: String, default: '', required: true },
    userInterest: { type: [String], default: [], required: true }
});

personalInfoSchema.index({ userId: 1 }, { unique: true });
const PersonalInfo = mongoose.model<IUserPersonalInterface>('PersonalInfo', personalInfoSchema);
export default PersonalInfo;
