import { UserModel } from "../../models/user";

export const GET_USERS_SERVICE = "GET_USERS_SERVICE";

export interface IGetUsersService {
    getUsersService: () => Promise<UserModel[]>
}