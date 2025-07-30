import mongoose from "mongoose";
import bcrypt from 'bcrypt'

export interface IUser extends mongoose.Document {
  username: string;
  password: string;
  isValidPassword(password: string): Promise<boolean>;
}

const userSchema = new mongoose.Schema<IUser>({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 6 },
})


userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err as any);
  }
});

userSchema.methods.isValidPassword = async function (password: string) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model<IUser>('User', userSchema);
export default User;