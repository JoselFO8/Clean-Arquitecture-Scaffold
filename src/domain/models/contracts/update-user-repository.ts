import { AddUserParams, UserModel } from "../user";

export const UPDATE_USER_REPOSITORY = "UPDATE_USER_REPOSITORY";

export interface IUpdateUserRepository {
    updateUserRepository: (id: string, data: AddUserParams) => Promise<UserModel>
}