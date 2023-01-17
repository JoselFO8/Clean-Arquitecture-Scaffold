import {Adapter, Service} from "@tsclean/core";

import { GET_USER_REPOSITORY, IGetUserRepository } from "@/domain/models/contracts/user/get-user-repository";
import { AddUserParams, UserModel } from "@/domain/models/user";
import { IGetUserService } from "../../get-user-service";

@Service()
export class GetUserServiceImpl implements IGetUserService {
    constructor(
        @Adapter(GET_USER_REPOSITORY) private readonly getUserRepository: IGetUserRepository
    ) {}

    // async getUserService(id: AddUserParams): Promise<UserModel> {
    // async getUserService({id}: UserModel): Promise<UserModel> {
    async getUserService(id: string): Promise<UserModel> {
        return await this.getUserRepository.getUserRepository(id);
    }
}