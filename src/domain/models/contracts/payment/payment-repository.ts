import { AddCustomerBalanceTransactionParams, CustomerBalanceTransactionModel } from "../../customer-balance-transaction";
import { AddSessionParams, SessionModel } from "../../session";

export const CREATE_SESSION_REPOSITORY = "CREATE_SESSION_REPOSITORY";

export const RETRIEVE_SESSION_REPOSITORY = "RETRIEVE_SESSION_REPOSITORY";

export const CREATE_CUSTOMER_BALANCE_TRANSACTION_REPOSITORY = "CREATE_CUSTOMER_BALANCE_TRANSACTION_REPOSITORY";

export const RETRIEVE_CUSTOMER_BALANCE_TRANSACTION_REPOSITORY = "RETRIEVE_CUSTOMER_BALANCE_TRANSACTION_REPOSITORY";

export const UPDATE_CUSTOMER_BALANCE_TRANSACTION_REPOSITORY = "UPDATE_CUSTOMER_BALANCE_TRANSACTION_REPOSITORY";

export const LIST_CUSTOMER_BALANCE_TRANSACTION_REPOSITORY = "LIST_CUSTOMER_BALANCE_TRANSACTION_REPOSITORY";

export interface IPaymentRepository {
    // Session
    createSessionRepository: (body: AddSessionParams) => Promise<SessionModel>
    retrieveSessionRepository: (id: SessionModel) => Promise<SessionModel>

    // Customer Balance Transaction
    createCustomerBalanceTransactionRepository: (body: AddCustomerBalanceTransactionParams, id: CustomerBalanceTransactionModel) => Promise<CustomerBalanceTransactionModel>
    retrieveCustomerBalanceTransactionRepository: (query: CustomerBalanceTransactionModel) => Promise<any>
    updateCustomerBalanceTransactionRepository: (body: any, query: CustomerBalanceTransactionModel) => Promise<any>
    listCustomerBalanceTransactionRepository: (id: any, query: CustomerBalanceTransactionModel) => Promise<any>
}
