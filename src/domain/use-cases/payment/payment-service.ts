import { AddCustomerBalanceTransactionParams, CustomerBalanceTransactionModel } from "@/domain/models/customer-balance-transaction";
import { AddSessionParams, SessionModel } from "@/domain/models/session";

export const CREATE_SESSION_SERVICE = "CREATE_SESSION_SERVICE";

export const RETRIEVE_SESSION_SERVICE = "RETRIEVE_SESSION_SERVICE";

export const CREATE_CUSTOMER_BALANCE_TRANSACTION_SERVICE = "CREATE_CUSTOMER_BALANCE_TRANSACTION_SERVICE";

export const RETRIEVE_CUSTOMER_BALANCE_TRANSACTION_SERVICE = "RETRIEVE_CUSTOMER_BALANCE_TRANSACTION_SERVICE";

export const UPDATE_CUSTOMER_BALANCE_TRANSACTION_SERVICE = "UPDATE_CUSTOMER_BALANCE_TRANSACTION_SERVICE";

export const LIST_CUSTOMER_BALANCE_TRANSACTION_SERVICE = "LIST_CUSTOMER_BALANCE_TRANSACTION_SERVICE";

export interface IPaymentService {
    // Session
    createSessionService: (body: AddSessionParams) => Promise<SessionModel>
    retrieveSessionService: (id: SessionModel) => Promise<SessionModel>
    
    // Customer Balance Transaction
    createCustomerBalanceTransactionService: (body: AddCustomerBalanceTransactionParams, id: CustomerBalanceTransactionModel) => Promise<CustomerBalanceTransactionModel>
    // retrieveCustomerBalanceTransactionService: (customer: AddCustomerBalanceTransactionParams, id: CustomerBalanceTransactionModel) => Promise<CustomerBalanceTransactionModel>
    retrieveCustomerBalanceTransactionService: (query: CustomerBalanceTransactionModel) => Promise<any>
    updateCustomerBalanceTransactionService: (body: any, query: CustomerBalanceTransactionModel) => Promise<any>
    listCustomerBalanceTransactionService: (id: any, query: CustomerBalanceTransactionModel) => Promise<any>
}