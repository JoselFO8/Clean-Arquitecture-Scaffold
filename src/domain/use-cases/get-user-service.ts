import { AddUserParams, UserModel } from "../models/user";

export const GET_USER_SERVICE = "GET_USER_SERVICE";

export interface IGetUserService {
    // getUserService: (id: AddUserParams) => Promise<UserModel>
    // getUserService: ({id}: UserModel) => Promise<UserModel>
    getUserService: (id: string) => Promise<UserModel>
}