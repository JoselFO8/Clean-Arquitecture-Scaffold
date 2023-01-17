import {Adapter, Service} from "@tsclean/core";

import { UserModel } from "@/domain/models/user";
import { GET_USERS_REPOSITORY, IGetUsersRepository } from "@/domain/models/contracts/user/get-users-repository";
import { IGetUsersService } from "../../user/get-users-service";

@Service()
export class GetUsersServiceImpl implements IGetUsersService {
    constructor(
        @Adapter(GET_USERS_REPOSITORY) private readonly getUsersRepository: IGetUsersRepository
    ) {}

    async getUsersService(): Promise<UserModel[]> {
        return await this.getUsersRepository.getUsersRepository();
    }
}