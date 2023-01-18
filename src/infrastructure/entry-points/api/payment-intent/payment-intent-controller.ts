import { ADD_PAYMENT_INTENT_SERVICE, IAddPaymentIntentService } from "@/domain/use-cases/payment-intent/add-payment-intent-service";
import { CONFIRM_PAYMENT_INTENT_SERVICE, IConfirmPaymentIntentService } from "@/domain/use-cases/payment-intent/confirm-payment-intent-service";
import { IRetrievePaymentIntentService, RETRIEVE_PAYMENT_INTENT_SERVICE } from "@/domain/use-cases/payment-intent/retrieve-payment-intent-service";
import {Adapter, Body, Get, Mapping, Param, Post} from "@tsclean/core";

@Mapping('payment-intent')
export class PaymentIntentController {
    constructor(
        @Adapter(ADD_PAYMENT_INTENT_SERVICE) private readonly addPaymentIntentService: IAddPaymentIntentService,
        @Adapter(RETRIEVE_PAYMENT_INTENT_SERVICE) private readonly retrievePaymentIntentService: IRetrievePaymentIntentService,
        @Adapter(CONFIRM_PAYMENT_INTENT_SERVICE) private readonly confirmPaymentIntentService: IConfirmPaymentIntentService,
    ) {}

    /**
     * Crear intento de pago
     * @param data Pasar parametros por body para crear intento de pago
     * @returns Objeto intento de pago
     */
    @Post()
    async addPaymentIntentController(@Body() data: any): Promise<any> {
        try {
            const result = await this.addPaymentIntentService.addPaymentIntentService(data);
            return {error: false, msg: "SUCCESSFUL_PAYMENT_INTENT", data: result}
        } catch (error) {
            return {error: true, msg: `PAYMENT_INTENT_ERROR: ${error}`, data: null} 
        }
    }

    /**
     * Recuperar un intento de pago
     * @param id Pasar id especifico de intento de pago
     * @returns Objeto intento de pago | nulo
     */
    @Get("/retrieve/:id")
    async retrievePaymentIntentController(@Param() {id}: any): Promise<any> {
        try {
            const result = await this.retrievePaymentIntentService.retrievePaymentIntentService(id);
            return {error: false, msg: "SUCCESSFUL_RETRIEVE_PAYMENT_INTENT", data: result}
        } catch (error) {
            return {error: true, msg: `RETRIEVE_PAYMENT_INTENT_ERROR: ${error}`, data: null} 
        }
    }

    /**
     * Confirmar intento de pago
     * @param body Pasar forma de pago por body
     * @param id Pasar id especifico de intento de pago 
     * @returns Objeto intento de pago | nulo
     */
    @Post("/confirm/:id")
    async confirmPaymentIntentController(@Body() body: any, @Param() {id}: any): Promise<any> {
        try {
            const result = await this.confirmPaymentIntentService.confirmPaymentIntentService(body, id) ;
            return {error: false, msg: "SUCCESSFUL_CONFIRMATION_PAYMENT_INTENT", data: result}
        } catch (error) {
            return {error: true, msg: `CONFIRMATION_PAYMENT_INTENT_ERROR: ${error}`, data: null} 
        }
    }
}
