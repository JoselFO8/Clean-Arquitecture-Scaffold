import { AddCustomerBalanceTransactionParams, CustomerBalanceTransactionModel } from "@/domain/models/customer-balance-transaction";
import { ResponseSession, SessionModel } from "@/domain/models/session";
import { CREATE_CUSTOMER_BALANCE_TRANSACTION_SERVICE, CREATE_SESSION_SERVICE, IPaymentService, LIST_CUSTOMER_BALANCE_TRANSACTION_SERVICE, RETRIEVE_CUSTOMER_BALANCE_TRANSACTION_SERVICE, RETRIEVE_SESSION_SERVICE, UPDATE_CUSTOMER_BALANCE_TRANSACTION_SERVICE } from "@/domain/use-cases/payment/payment-service";
import {Adapter, Body, Get, Mapping, Param, Post, Query} from "@tsclean/core";

@Mapping('payment')
export class PaymentController {
    constructor(
        @Adapter(CREATE_SESSION_SERVICE) private readonly createSessionService: IPaymentService,
        @Adapter(RETRIEVE_SESSION_SERVICE) private readonly retrieveSessionService: IPaymentService,
        @Adapter(CREATE_CUSTOMER_BALANCE_TRANSACTION_SERVICE) private readonly  createCustomerBalanceTransactionService: IPaymentService,
        @Adapter(RETRIEVE_CUSTOMER_BALANCE_TRANSACTION_SERVICE) private readonly  retrieveCustomerBalanceTransactionService: IPaymentService,
        @Adapter(UPDATE_CUSTOMER_BALANCE_TRANSACTION_SERVICE) private readonly  updateCustomerBalanceTransactionService: IPaymentService,
        @Adapter(LIST_CUSTOMER_BALANCE_TRANSACTION_SERVICE) private readonly  listCustomerBalanceTransactionService: IPaymentService,
    ) {}

    // SESSION

    /**
     * Crear session
     * @param body Recibe parametros por body
     * @returns Objeto session | error
     */
    @Post('/session/create')
    // async createSessionController(@Body() body: SessionModel): Promise<ResponseSession> {
    async createSessionController(@Body() body: SessionModel): Promise<any> {
        try {
            const result = await this.createSessionService.createSessionService(body);
            return {error: false, msg: "CREATE_SESSION_SUCCESSFUL", data: result}
        } catch (error) {
            return {error: true, msg: {description: `CREATE_SESSION_ERROR: ${error}`, error: error.response.data.error}, data: null} 
        }
    }

    /**
     * Recuperar session
     * @param id Recibe id de la session
     * @returns Objeto session | error
     */
    @Get('/session/retrieve/:id')
    async retrieveSessionController(@Param() id: SessionModel): Promise<any> {
        try {
            const result = await this.retrieveSessionService.retrieveSessionService(id);
            return {error: false, msg: "CREATE_SESSION_SUCCESSFUL", data: result}
        } catch (error) {
            return {error: true, msg: {description: `CREATE_SESSION_ERROR: ${error}`, error: error.response.data.error}, data: null} 
        }
    }

    // CUSTOMER BALANCE TRANSACTION

    /**
     * Crear create customer balance transaction
     * Enviar secret key mediante Headers
     * @param body Recibe parametros por body
     * @param id customer balance transaction ID
     * @returns Customer balance transaction object | error
     */
    @Post('/customer/balance_transaction/create/:id')
    async createCustomerBalanceTransactionController(@Body() body: AddCustomerBalanceTransactionParams, @Param() id: CustomerBalanceTransactionModel): Promise<any> {
        try {
            const result = await this.createCustomerBalanceTransactionService.createCustomerBalanceTransactionService(body, id);
            return {error: false, msg: "CREATE_CUSTOMER_BALANCE_TRANSACTION_SUCCESSFUL", data: result}
        } catch (error) {
            return {error: true, msg: {description: `CREATE_CUSTOMER_BALANCE_TRANSACTION_ERROR: ${error}`, error: error.response.data.error}, data: null} 
        }
    }

    /**
     * Recuperar customer balance transaction
     * Enviar secret key mediante Headers
     * @param query customer customer ID & customer balance transaction ID
     * @returns Customer balance transaction object | error
     */
    @Get('/customer/balance_transaction/retrieve')
    async retrieveCustomerBalanceTransactionController(@Query() query: CustomerBalanceTransactionModel): Promise<any> {
        try {
            const result = await this.retrieveCustomerBalanceTransactionService.retrieveCustomerBalanceTransactionService(query)
            return {error: false, msg: "RETRIEVE_CUSTOMER_BALANCE_TRANSACTION_SUCCESSFUL", data: result}
        } catch (error) {
            return {error: true, msg: {description: `RETRIEVE_CUSTOMER_BALANCE_TRANSACTION_ERROR: ${error}`, error: error.response.data.error}, data: null} 
        }
    }

    /**
     * 
     * @param prueba 
     * @returns 
     */
    @Post('/customer/balance_transaction/update')
    async updateCustomerBalanceTransactionController(@Body() body: any, @Query() query: CustomerBalanceTransactionModel): Promise<any> {
        try {
            const result = await this.updateCustomerBalanceTransactionService.updateCustomerBalanceTransactionService(body, query)
            return {error: false, msg: "UPDATE_CUSTOMER_BALANCE_TRANSACTION_SUCCESSFUL", data: result}
        } catch (error) {
            return {error: true, msg: {description: `UPDATE_CUSTOMER_BALANCE_TRANSACTION_ERROR: ${error}`, error: error.response.data.error}, data: null} 
        }
    }

    /**
     * 
     * @param query 
     * @returns 
     */
    @Get('/customer/balance_transaction/:id/list')
    async listCustomerBalanceTransactionController(@Param() id: any, @Query() query: CustomerBalanceTransactionModel): Promise<any> {
        try {
            const result = await this.listCustomerBalanceTransactionService.listCustomerBalanceTransactionService(id, query)
            return {error: false, msg: "RETRIEVE_CUSTOMER_BALANCE_TRANSACTION_SUCCESSFUL", data: result}
        } catch (error) {
            return {error: true, msg: {description: `RETRIEVE_CUSTOMER_BALANCE_TRANSACTION_ERROR: ${error}`, error: error.response.data.error}, data: null} 
        }
    }
}
