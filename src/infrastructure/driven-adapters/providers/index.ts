import { ADD_PAYMENT_INTENT_REPOSITORY } from "@/domain/models/contracts/payment-intent/add-payment-intent-repository";
import { ADD_USER_REPOSITORY } from "@/domain/models/contracts/user/add-user-repository";
import { GET_USER_REPOSITORY } from "@/domain/models/contracts/user/get-user-repository";
import { GET_USERS_REPOSITORY } from "@/domain/models/contracts/user/get-users-repository";
import { UPDATE_USER_REPOSITORY } from "@/domain/models/contracts/user/update-user-repository";
import { ADD_PAYMENT_INTENT_SERVICE } from "@/domain/use-cases/payment-intent/add-payment-intent-service";
import { ADD_USER_SERVICE } from "@/domain/use-cases/user/add-user-service";
import { GET_USER_SERVICE } from "@/domain/use-cases/user/get-user-service";
import { GET_USERS_SERVICE } from "@/domain/use-cases/user/get-users-service";
import { AddPaymentIntentServiceImpl } from "@/domain/use-cases/impl/payment-intent/add-payment-intent-service-impl";
import { AddUserServiceImpl } from "@/domain/use-cases/impl/user/add-user-service-impl";
import { GetUserServiceImpl } from "@/domain/use-cases/impl/user/get-user-service-impl";
import { GetUsersServiceImpl } from "@/domain/use-cases/impl/user/get-users-service-impl";
import { UpdateUserServiceImpl } from "@/domain/use-cases/impl/user/update-user-service-impl";


import { UPDATE_USER_SERVICE } from "@/domain/use-cases/user/update-user-service";
import { UserMongooseRepositoryAdapter } from "@/infrastructure/driven-adapters/adapters/orm/mongoose/user-mongoose-repository-adapter";
import { PaymentIntentMongooseRepositoryAdapter } from "../adapters/orm/mongoose/payment-intent-mongoose-repository-adapter";

export const adapters = [
    // User
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
    // Payment-Intent
    {
        provide: ADD_PAYMENT_INTENT_REPOSITORY,
        useClass: PaymentIntentMongooseRepositoryAdapter
    },
];

export const services = [
    // User
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
    // Payment-Intent
    {
        provide: ADD_PAYMENT_INTENT_SERVICE,
        useClass: AddPaymentIntentServiceImpl
    },
]