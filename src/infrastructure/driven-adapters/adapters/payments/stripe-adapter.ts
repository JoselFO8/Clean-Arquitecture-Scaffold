import { API_KEY } from "@/application/config/environment"
import { IPaymentRepository } from "@/domain/models/contracts/payment/payment-repository"
import { AddCustomerBalanceTransactionParams, CustomerBalanceTransactionModel } from "@/domain/models/customer-balance-transaction"
import { AddSessionParams, SessionModel } from "@/domain/models/session"
import axios from "axios"
import QueryString from "qs"

export class StripeAdapter implements IPaymentRepository
{
    // Implementation
    constructor (
        private readonly config,
        private readonly stripeUrl
    ) {
        this.config = { headers:{ Authorization: `Bearer ${API_KEY}`} }
        this.stripeUrl = "https://api.stripe.com/v1"
    }
    
    // SESIION
    
    /**
     * Crear session
     * Enviar secret key
     * @param body Recibe parametros por body
     * @returns Objeto session | error
     */
    async createSessionRepository(body: AddSessionParams): Promise<SessionModel> {
        console.log("Desde createSessionRepository");
        const createSession = await axios.post(
            `https://api.stripe.com/v1/financial_connections/sessions`,
            QueryString.stringify(body),
            this.config
        )
        return createSession.data
    }

    /**
     * Recuperar session
     * Enviar secret key
     * @param id Recibe id de la session
     * @returns Objeto session | error
     */
    async retrieveSessionRepository(id: SessionModel): Promise<SessionModel> {
        console.log("Desde retrieveSessionRepository");
        const retrieveSession = await axios.get(
            `https://api.stripe.com/v1/financial_connections/sessions/${id.id}`,
            this.config
        )
        return retrieveSession.data
    }

    // CUSTOMER BALANCE TRANSACTION

    /**
     * Crear customer balance transaction
     * Enviar secret key
     * @param body Recibe parametros por body
     * @param id customer balance transaction ID
     * @returns Customer balance transaction object | error
     */
    async createCustomerBalanceTransactionRepository(body: AddCustomerBalanceTransactionParams, id: CustomerBalanceTransactionModel): Promise<CustomerBalanceTransactionModel> {
        console.log("Desde createCustomerBalanceTransactionRepository");
        
        const createCustomerBalanceTransaction = await axios.post(
            `https://api.stripe.com/v1/customers/${id.id}/balance_transactions`,
            QueryString.stringify(body),
            this.config
        )
        return createCustomerBalanceTransaction.data
    }

    /**
     * Recuperar una Customer Balance Transaction
     * @param id Customer Balance Transaction ID
     * @param customer Customer ID
     * @returns Customer balance transaction object | error
     */
    async retrieveCustomerBalanceTransactionRepository(query: CustomerBalanceTransactionModel): Promise<any> {
        
        const retrieveCustomerBalanceTransaction = await axios.get(
            `https://api.stripe.com/v1/customers/${query.customer}/balance_transactions/${query.id}`,
            this.config
        )
        return retrieveCustomerBalanceTransaction.data
    }

    /**
     * 
     * @param body 
     * @param query 
     * @returns 
     */
    async updateCustomerBalanceTransactionRepository(body: any, query: CustomerBalanceTransactionModel): Promise<any> {
        console.log("desde updateCustomerBalanceTransactionRepository", {body, query});
        const updateCustomerBalanceTransaction = await axios.post(
            `https://api.stripe.com/v1/customers/${query.customer}/balance_transactions/${query.id}`,
            QueryString.stringify(body),
            this.config
        )
        return updateCustomerBalanceTransaction.data
    }

    // CORREGIR SEGUN POSIBLES PARAMETROS
    // CORREGIR - CREAR FUNCION PARA PARSEAR DE URLENCODE A urlstring
    /**
     * 
     * @param query 
     * @returns 
     */
    async listCustomerBalanceTransactionRepository(id: any, query: any): Promise<any> {
        // https://api.stripe.com/v1/customers/cus_NCmG8aDxP5GDda/balance_transactions?limit=2
        console.log("desde listCustomerBalanceTransactionRepository", id.id,query.limit);
        const listCustomerBalanceTransaction = await axios.get(
            `https://api.stripe.com/v1/customers/${id.id}/balance_transactions${query && query.limit ? `?limit=${query.limit}` : ""}`,
            // "https://api.stripe.com/v1/customers/cus_NCmG8aDxP5GDda/balance_transactions?limit=2",
            // QueryString.stringify(body),
            this.config
        )
        return listCustomerBalanceTransaction.data
    }
}