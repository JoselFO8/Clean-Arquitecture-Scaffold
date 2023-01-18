import { PaymentIntentModel, ResponsePaymentIntent } from "@/domain/models/payment-intent";
import { ADD_PAYMENT_INTENT_SERVICE, IAddPaymentIntentService } from "@/domain/use-cases/payment-intent/add-payment-intent-service";
import { CONFIRM_PAYMENT_INTENT_SERVICE, IConfirmPaymentIntentService } from "@/domain/use-cases/payment-intent/confirm-payment-intent-service";
import { IRetrievePaymentIntentService, RETRIEVE_PAYMENT_INTENT_SERVICE } from "@/domain/use-cases/payment-intent/retrieve-payment-intent-service";
import { IUpdatePaymentIntentService, UPDATE_PAYMENT_INTENT_SERVICE } from "@/domain/use-cases/payment-intent/update-payment-intent-service";
import {Adapter, Body, Get, Mapping, Param, Post} from "@tsclean/core";

@Mapping('payment-intent')
export class PaymentIntentController {
    constructor(
        @Adapter(ADD_PAYMENT_INTENT_SERVICE) private readonly addPaymentIntentService: IAddPaymentIntentService,
        @Adapter(RETRIEVE_PAYMENT_INTENT_SERVICE) private readonly retrievePaymentIntentService: IRetrievePaymentIntentService,
        @Adapter(UPDATE_PAYMENT_INTENT_SERVICE) private readonly updatePaymentIntentService: IUpdatePaymentIntentService,
        @Adapter(CONFIRM_PAYMENT_INTENT_SERVICE) private readonly confirmPaymentIntentService: IConfirmPaymentIntentService,
    ) {}

    /**
     * Crear intento de pago
     * @param body Pasar parametros por body para crear intento de pago
     * @returns Objeto intento de pago
     */
    @Post()
    async addPaymentIntentController(@Body() body: PaymentIntentModel): Promise<ResponsePaymentIntent> {
        try {
            const result = await this.addPaymentIntentService.addPaymentIntentService(body);
            return {error: false, msg: "PAYMENT_INTENT_SUCCESSFUL", data: result}
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
    async retrievePaymentIntentController(@Param() id: PaymentIntentModel): Promise<ResponsePaymentIntent> {
        try {
            const result = await this.retrievePaymentIntentService.retrievePaymentIntentService(id);
            return {error: false, msg: "RETRIEVE_PAYMENT_INTENT_SUCCESSFUL", data: result}
        } catch (error) {
            return {error: true, msg: `RETRIEVE_PAYMENT_INTENT_ERROR: ${error}`, data: null} 
        }
    }

    /**
     * Actualizar intento de pago
     * @param body Pasar parametros por body a actualizar
     * @param id Pasar id especifico de intento de pago
     * @returns Objeto intento de pago actualizado | nulo
     */
    @Post("/update/:id")
    async updatePaymentIntentController(@Body() body: PaymentIntentModel, @Param() id: PaymentIntentModel): Promise<ResponsePaymentIntent> {
    // async updatePaymentIntentController(@Body() body: PaymentIntentModel, @Param() id: PaymentIntentModel): Promise<any> {
        try {
            const result = await this.updatePaymentIntentService.updatePaymentIntentService(body, id);
            return {error: false, msg: "UPDATE_PAYMENT_INTENT_SUCCESSFUL", data: result}
        } catch (error) {
            return {error: true, msg: `UPDATE_PAYMENT_INTENT_ERROR: ${error}`, data: null} 
        }
    }

    /**
     * Confirmar intento de pago
     * @param body Pasar forma de pago por body
     * @param id Pasar id especifico de intento de pago 
     * @returns Objeto intento de pago | nulo
     */
    @Post("/confirm/:id")
    async confirmPaymentIntentController(@Body() body: PaymentIntentModel, @Param() {id}: PaymentIntentModel): Promise<ResponsePaymentIntent> {
        try {
            const result = await this.confirmPaymentIntentService.confirmPaymentIntentService(body, id) ;
            return {error: false, msg: "CONFIRMATION_PAYMENT_INTENT_SUCCESSFUL", data: result}
        } catch (error) {
            return {error: true, msg: `CONFIRMATION_PAYMENT_INTENT_ERROR: ${error}`, data: null} 
        }
    }
}
