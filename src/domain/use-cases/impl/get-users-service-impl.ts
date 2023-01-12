import {Adapter, Service} from "@tsclean/core";
import {IGetUsersService} from "@/domain/use-cases/get-users-service";
import { GET_USERS_REPOSITORY, IGetUsersRepository } from "@/domain/models/contracts/get-users-repository";
import { UserModel } from "@/domain/models/user";

@Service()
export class GetUsersServiceImpl implements IGetUsersService {
    constructor(
        @Adapter(GET_USERS_REPOSITORY) private readonly getUsersRepository: IGetUsersRepository
    ) {}

    async getUsersService(): Promise<UserModel[]> {
        return await this.getUsersRepository.getUsersRepository();
    }
}