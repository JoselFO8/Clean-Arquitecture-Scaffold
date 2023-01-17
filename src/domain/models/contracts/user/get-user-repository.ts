import { UserModel } from "../../user";


export const GET_USER_REPOSITORY = "GET_USER_REPOSITORY";

export interface IGetUserRepository {
    // getUserRepository: (id: AddUserParams) => Promise<UserModel>
    // getUserRepository: ({id}: UserModel) => Promise<UserModel>
    getUserRepository: (id: string) => Promise<UserModel>
}