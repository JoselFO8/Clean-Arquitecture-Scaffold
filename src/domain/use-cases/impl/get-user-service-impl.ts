import {Adapter, Service} from "@tsclean/core";
import {IGetUserService} from "@/domain/use-cases/get-user-service";
import { GET_USER_REPOSITORY, IGetUserRepository } from "@/domain/models/contracts/get-user-repository";
import { AddUserParams, UserModel } from "@/domain/models/user";

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