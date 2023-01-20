import { ADD_USER_REPOSITORY } from "@/domain/models/contracts/user/add-user-repository";
import { GET_USER_REPOSITORY } from "@/domain/models/contracts/user/get-user-repository";
import { GET_USERS_REPOSITORY } from "@/domain/models/contracts/user/get-users-repository";
import { UPDATE_USER_REPOSITORY } from "@/domain/models/contracts/user/update-user-repository";
import { ADD_USER_SERVICE } from "@/domain/use-cases/user/add-user-service";
import { GET_USER_SERVICE } from "@/domain/use-cases/user/get-user-service";
import { GET_USERS_SERVICE } from "@/domain/use-cases/user/get-users-service";
import { AddUserServiceImpl } from "@/domain/use-cases/impl/user/add-user-service-impl";
import { GetUserServiceImpl } from "@/domain/use-cases/impl/user/get-user-service-impl";
import { GetUsersServiceImpl } from "@/domain/use-cases/impl/user/get-users-service-impl";
import { UpdateUserServiceImpl } from "@/domain/use-cases/impl/user/update-user-service-impl";


import { UPDATE_USER_SERVICE } from "@/domain/use-cases/user/update-user-service";
import { UserMongooseRepositoryAdapter } from "@/infrastructure/driven-adapters/adapters/orm/mongoose/user-mongoose-repository-adapter";
import { StripeAdapter } from "../adapters/payments/stripe-adapter";
import { CREATE_SESSION_REPOSITORY, RETRIEVE_SESSION_REPOSITORY } from "@/domain/models/contracts/payment/payment-repository";
import { CREATE_SESSION_SERVICE, RETRIEVE_SESSION_SERVICE } from "@/domain/use-cases/payment/payment-service";
import { PaymentServiceImpl } from "@/domain/use-cases/impl/payment/payment-service-impl";

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

    // Payment
    {
        provide: CREATE_SESSION_REPOSITORY,
        useClass: StripeAdapter
    },
    {
        provide: RETRIEVE_SESSION_REPOSITORY,
        useClass: StripeAdapter
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
    
    // Payment
    {
        provide: CREATE_SESSION_SERVICE,
        useClass: PaymentServiceImpl
    },
    {
        provide: RETRIEVE_SESSION_SERVICE,
        useClass: PaymentServiceImpl
    },
]