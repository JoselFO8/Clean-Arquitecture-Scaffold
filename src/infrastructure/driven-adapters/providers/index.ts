import { ADD_USER_REPOSITORY } from "@/domain/models/contracts/add-user-repository";
import { GET_USER_REPOSITORY } from "@/domain/models/contracts/get-user-repository";
import { GET_USERS_REPOSITORY } from "@/domain/models/contracts/get-users-repository";
import { UPDATE_USER_REPOSITORY } from "@/domain/models/contracts/update-user-repository";
import { ADD_USER_SERVICE } from "@/domain/use-cases/add-user-service";
import { GET_USER_SERVICE } from "@/domain/use-cases/get-user-service";
import { GET_USERS_SERVICE } from "@/domain/use-cases/get-users-service";
import { AddUserServiceImpl } from "@/domain/use-cases/impl/add-user-service-impl";
import { GetUserServiceImpl } from "@/domain/use-cases/impl/get-user-service-impl";
import { GetUsersServiceImpl } from "@/domain/use-cases/impl/get-users-service-impl";
import { UpdateUserServiceImpl } from "@/domain/use-cases/impl/update-user-service-impl";
import { UPDATE_USER_SERVICE } from "@/domain/use-cases/update-user-service";
import { UserMongooseRepositoryAdapter } from "@/infrastructure/driven-adapters/adapters/orm/mongoose/user-mongoose-repository-adapter";

export const adapters = [
    {
        provide: ADD_USER_REPOSITORY,
        useClass: UserMongooseRepositoryAdapter
    },
    {
        provide: GET_USERS_REPOSITORY,
        useClass: UserMongooseRepositoryAdapter
    },
    {
        provide: GET_USER_REPOSITORY,
        useClass: UserMongooseRepositoryAdapter
    },
    {
        provide: UPDATE_USER_REPOSITORY,
        useClass: UserMongooseRepositoryAdapter
    },
];

// export const providers = [
//     {
//         provide: ADD_USER_REPOSITORY,
//         useClass: UserMongooseRepositoryAdapter
//     }
// ]

export const services = [
    {
        provide: ADD_USER_SERVICE,
        useClass: AddUserServiceImpl
    },
    {
        provide: GET_USERS_SERVICE,
        useClass: GetUsersServiceImpl
    },
    {
        provide: GET_USER_SERVICE,
        useClass: GetUserServiceImpl
    },
    {
        provide: UPDATE_USER_SERVICE,
        useClass: UpdateUserServiceImpl
    },
]