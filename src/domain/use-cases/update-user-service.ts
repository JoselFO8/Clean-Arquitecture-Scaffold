import { AddUserParams, UserModel } from "../models/user";

export const UPDATE_USER_SERVICE = "UPDATE_USER_SERVICE";

export interface IUpdateUserService {
    updateUserService: (id: string, data: AddUserParams) => Promise<UserModel>
}