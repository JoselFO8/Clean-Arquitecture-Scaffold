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
// import { PaymentIntentMongooseRepositoryAdapter } from "../adapters/orm/mongoose/payment-intent-mongoose-repository-adapter";
import { StripeAdapter } from "../adapters/payments/stripe-adapter";
import { CONFIRM_PAYMENT_INTENT_REPOSITORY } from "@/domain/models/contracts/payment-intent/confirm-payment-intent-repository";
import { CONFIRM_PAYMENT_INTENT_SERVICE } from "@/domain/use-cases/payment-intent/confirm-payment-intent-service";
import { ConfirmPaymentIntentServiceImpl } from "@/domain/use-cases/impl/payment-intent/confirm-payment-intent-service-impl";
import { RETRIEVE_PAYMENT_INTENT_REPOSITORY } from "@/domain/models/contracts/payment-intent/retrieve-payment-intent-repository";
import { RETRIEVE_PAYMENT_INTENT_SERVICE } from "@/domain/use-cases/payment-intent/retrieve-payment-intent-service";
import { RetrievePaymentIntentServiceImpl } from "@/domain/use-cases/impl/payment-intent/retrieve-payment-intent-service-impl";
import { UPDATE_PAYMENT_INTENT_REPOSITORY } from "@/domain/models/contracts/payment-intent/update-payment-intent-repository";
import { UPDATE_PAYMENT_INTENT_SERVICE } from "@/domain/use-cases/payment-intent/update-payment-intent-service";
import { UpdatePaymentIntentServiceImpl } from "@/domain/use-cases/impl/payment-intent/update-payment-intent-service-impl";

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
    // {
    //     provide: ADD_PAYMENT_INTENT_REPOSITORY,
    //     useClass: PaymentIntentMongooseRepositoryAdapter
    // },
    {
        provide: ADD_PAYMENT_INTENT_REPOSITORY,
        useClass: StripeAdapter
    },
    {
        provide: RETRIEVE_PAYMENT_INTENT_REPOSITORY,
        useClass: StripeAdapter
    },
    {
        provide: UPDATE_PAYMENT_INTENT_REPOSITORY,
        useClass: StripeAdapter
    },
    {
        provide: CONFIRM_PAYMENT_INTENT_REPOSITORY,
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
    // Payment-Intent
    {
        provide: ADD_PAYMENT_INTENT_SERVICE,
        useClass: AddPaymentIntentServiceImpl
    },
    {
        provide: RETRIEVE_PAYMENT_INTENT_SERVICE,
        useClass: RetrievePaymentIntentServiceImpl
    },
    {
        provide: UPDATE_PAYMENT_INTENT_SERVICE,
        useClass: UpdatePaymentIntentServiceImpl
    },
    {
        provide: CONFIRM_PAYMENT_INTENT_SERVICE,
        useClass: ConfirmPaymentIntentServiceImpl
    },
]