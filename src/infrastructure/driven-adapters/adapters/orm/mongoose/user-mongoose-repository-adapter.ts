import { IAddUserRepository } from "@/domain/models/contracts/add-user-repository";
import {AddUserParams, UserModel} from "@/domain/models/user";
import {UserModelSchema} from "@/infrastructure/driven-adapters/adapters/orm/mongoose/models/user";

export class UserMongooseRepositoryAdapter implements IAddUserRepository {
    // Implementation
    async addUserRepository(data: AddUserParams): Promise<UserModel> {
        return await UserModelSchema.create(data);
    }

    async getUsersRepository(): Promise<UserModel[]> {
        return await UserModelSchema.find();
    }

    // async getUserRepository(id: AddUserParams): Promise<UserModel> {
    // async getUserRepository({id}: UserModel): Promise<UserModel> {
    async getUserRepository(id: string): Promise<UserModel> {
        return await UserModelSchema.findById(id);
    }

    async updateUserRepository(id: string, data: AddUserParams): Promise<UserModel> {
        return await UserModelSchema.findOneAndUpdate({_id: id}, data);
    }
}
