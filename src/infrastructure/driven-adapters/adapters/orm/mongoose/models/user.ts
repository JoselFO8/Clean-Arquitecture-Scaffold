import { UserModel } from '@/domain/models/user';
import { model, Schema } from "mongoose";

const userSchema = new Schema<UserModel>({
    // Implementation
    id: {type: String},
    name: {type: String, required: true},
    email: {type: String, required: true}
});

export const UserModelSchema = model<UserModel>('users', userSchema);
