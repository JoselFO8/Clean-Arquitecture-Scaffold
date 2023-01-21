import {Adapter, Service} from "@tsclean/core";
import {IPaymentService} from "@/domain/use-cases/payment/payment-service";
import { AddSessionParams, SessionModel } from "@/domain/models/session";
import { CREATE_CUSTOMER_BALANCE_TRANSACTION_REPOSITORY, CREATE_SESSION_REPOSITORY, IPaymentRepository, LIST_CUSTOMER_BALANCE_TRANSACTION_REPOSITORY, RETRIEVE_CUSTOMER_BALANCE_TRANSACTION_REPOSITORY, RETRIEVE_SESSION_REPOSITORY, UPDATE_CUSTOMER_BALANCE_TRANSACTION_REPOSITORY } from "@/domain/models/contracts/payment/payment-repository";
import { AddCustomerBalanceTransactionParams, CustomerBalanceTransactionModel } from "@/domain/models/customer-balance-transaction";

@Service()
export class PaymentServiceImpl implements IPaymentService {
    constructor(
        @Adapter(CREATE_SESSION_REPOSITORY) private readonly createSessionRepository: IPaymentRepository,
        @Adapter(RETRIEVE_SESSION_REPOSITORY) private readonly retrieveSessionRepository: IPaymentRepository,
        @Adapter(CREATE_CUSTOMER_BALANCE_TRANSACTION_REPOSITORY) private readonly createCustomerBalanceTransactionRepository: IPaymentRepository,
        @Adapter(RETRIEVE_CUSTOMER_BALANCE_TRANSACTION_REPOSITORY) private readonly retrieveCustomerBalanceTransactionRepository: IPaymentRepository,
        @Adapter(UPDATE_CUSTOMER_BALANCE_TRANSACTION_REPOSITORY) private readonly updateCustomerBalanceTransactionRepository: IPaymentRepository,
        @Adapter(LIST_CUSTOMER_BALANCE_TRANSACTION_REPOSITORY) private readonly listCustomerBalanceTransactionRepository: IPaymentRepository,
    ) {}

    // Session
    async createSessionService(body: AddSessionParams): Promise<SessionModel> {
        return this.createSessionRepository.createSessionRepository(body)
    }
    async retrieveSessionService(id: SessionModel): Promise<SessionModel> {
        return this.retrieveSessionRepository.retrieveSessionRepository(id)
    }
    
    // Customer Balance Transaction
    async createCustomerBalanceTransactionService(body: AddCustomerBalanceTransactionParams, id: CustomerBalanceTransactionModel): Promise<CustomerBalanceTransactionModel> {
        return this.createCustomerBalanceTransactionRepository.createCustomerBalanceTransactionRepository(body, id)
    }
    // async retrieveCustomerBalanceTransactionService(customer: AddCustomerBalanceTransactionParams, id: CustomerBalanceTransactionModel): Promise<CustomerBalanceTransactionModel> {
    //     return this.retrieveCustomerBalanceTransactionRepository.createCustomerBalanceTransactionRepository(customer, id)
    // }
    async retrieveCustomerBalanceTransactionService(query: CustomerBalanceTransactionModel): Promise<any> {
        return this.retrieveCustomerBalanceTransactionRepository.retrieveCustomerBalanceTransactionRepository(query)
    }
    async updateCustomerBalanceTransactionService(body: any, query: CustomerBalanceTransactionModel): Promise<any> {
        return this.updateCustomerBalanceTransactionRepository.updateCustomerBalanceTransactionRepository(body, query)
    }
    async listCustomerBalanceTransactionService(id: any, query: CustomerBalanceTransactionModel): Promise<any> {
        return this.listCustomerBalanceTransactionRepository.listCustomerBalanceTransactionRepository(id, query)
    }
}