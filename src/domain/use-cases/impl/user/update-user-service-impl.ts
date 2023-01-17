import {Adapter, Service} from "@tsclean/core";

import { AddUserParams, UserModel } from "@/domain/models/user";
import { IUpdateUserRepository, UPDATE_USER_REPOSITORY } from "@/domain/models/contracts/user/update-user-repository";
import { IUpdateUserService } from "../../user/update-user-service";

@Service()
export class UpdateUserServiceImpl implements IUpdateUserService {
    constructor(
        @Adapter(UPDATE_USER_REPOSITORY) private readonly updateUserRepository: IUpdateUserRepository
    ) {}

    async updateUserService(id: string, data: AddUserParams): Promise<UserModel> {
        return await this.updateUserRepository.updateUserRepository(id, data);
    }
}