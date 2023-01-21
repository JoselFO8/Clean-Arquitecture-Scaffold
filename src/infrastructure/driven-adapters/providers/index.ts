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
import { CREATE_CUSTOMER_BALANCE_TRANSACTION_REPOSITORY, CREATE_SESSION_REPOSITORY, LIST_CUSTOMER_BALANCE_TRANSACTION_REPOSITORY, RETRIEVE_CUSTOMER_BALANCE_TRANSACTION_REPOSITORY, RETRIEVE_SESSION_REPOSITORY, UPDATE_CUSTOMER_BALANCE_TRANSACTION_REPOSITORY } from "@/domain/models/contracts/payment/payment-repository";
import { CREATE_CUSTOMER_BALANCE_TRANSACTION_SERVICE, CREATE_SESSION_SERVICE, LIST_CUSTOMER_BALANCE_TRANSACTION_SERVICE, RETRIEVE_CUSTOMER_BALANCE_TRANSACTION_SERVICE, RETRIEVE_SESSION_SERVICE, UPDATE_CUSTOMER_BALANCE_TRANSACTION_SERVICE } from "@/domain/use-cases/payment/payment-service";
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

    // Session
    {
        provide: CREATE_SESSION_REPOSITORY,
        useClass: StripeAdapter
    },
    {
        provide: RETRIEVE_SESSION_REPOSITORY,
        useClass: StripeAdapter
    },
    
    // Customer balance transaction
    {
        provide: CREATE_CUSTOMER_BALANCE_TRANSACTION_REPOSITORY,
        useClass: StripeAdapter
    },
    {
        provide: RETRIEVE_CUSTOMER_BALANCE_TRANSACTION_REPOSITORY,
        useClass: StripeAdapter
    },
    {
        provide: UPDATE_CUSTOMER_BALANCE_TRANSACTION_REPOSITORY,
        useClass: StripeAdapter
    },
    {
        provide: LIST_CUSTOMER_BALANCE_TRANSACTION_REPOSITORY,
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
    
    // Sesion
    {
        provide: CREATE_SESSION_SERVICE,
        useClass: PaymentServiceImpl
    },
    {
        provide: RETRIEVE_SESSION_SERVICE,
        useClass: PaymentServiceImpl
    },

    // Customer balance transaction
    {
        provide: CREATE_CUSTOMER_BALANCE_TRANSACTION_SERVICE,
        useClass: PaymentServiceImpl
    },
    {
        provide: RETRIEVE_CUSTOMER_BALANCE_TRANSACTION_SERVICE,
        useClass: PaymentServiceImpl
    },
    {
        provide: UPDATE_CUSTOMER_BALANCE_TRANSACTION_SERVICE,
        useClass: PaymentServiceImpl
    },
    {
        provide: LIST_CUSTOMER_BALANCE_TRANSACTION_SERVICE,
        useClass: PaymentServiceImpl
    },
]