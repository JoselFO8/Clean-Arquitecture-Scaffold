import {Adapter, Service} from "@tsclean/core";
import {IUpdateUserService} from "@/domain/use-cases/update-user-service";
import { IUpdateUserRepository, UPDATE_USER_REPOSITORY } from "@/domain/models/contracts/update-user-repository";
import { AddUserParams, UserModel } from "@/domain/models/user";

@Service()
export class UpdateUserServiceImpl implements IUpdateUserService {
    constructor(
        @Adapter(UPDATE_USER_REPOSITORY) private readonly updateUserRepository: IUpdateUserRepository
    ) {}

    async updateUserService(id: string, data: AddUserParams): Promise<UserModel> {
        return await this.updateUserRepository.updateUserRepository(id, data);
    }
}