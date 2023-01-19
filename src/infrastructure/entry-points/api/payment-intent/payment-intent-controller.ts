import { PaymentIntentModel, ResponsePaymentIntent } from "@/domain/models/payment-intent";
import { ADD_PAYMENT_INTENT_SERVICE, IAddPaymentIntentService } from "@/domain/use-cases/payment-intent/add-payment-intent-service";
import { CANCEL_PAYMENT_INTENT_SERVICE, ICancelPaymentIntentService } from "@/domain/use-cases/payment-intent/cancel-payment-intent-service";
import { CAPTURE_PAYMENT_INTENT_SERVICE, ICapturePaymentIntentService } from "@/domain/use-cases/payment-intent/capture-payment-intent-service";
import { CONFIRM_PAYMENT_INTENT_SERVICE, IConfirmPaymentIntentService } from "@/domain/use-cases/payment-intent/confirm-payment-intent-service";
import { IListAllPaymentIntentsService, LIST_ALL_PAYMENT_INTENT_SERVICE } from "@/domain/use-cases/payment-intent/list-all-payment-intents-service";
import { IRetrievePaymentIntentService, RETRIEVE_PAYMENT_INTENT_SERVICE } from "@/domain/use-cases/payment-intent/retrieve-payment-intent-service";
import { IUpdatePaymentIntentService, UPDATE_PAYMENT_INTENT_SERVICE } from "@/domain/use-cases/payment-intent/update-payment-intent-service";
import {Adapter, Body, Get, Mapping, Param, Post, Query} from "@tsclean/core";

@Mapping('payment-intent')
export class PaymentIntentController {
    constructor(
        @Adapter(ADD_PAYMENT_INTENT_SERVICE) private readonly addPaymentIntentService: IAddPaymentIntentService,
        @Adapter(RETRIEVE_PAYMENT_INTENT_SERVICE) private readonly retrievePaymentIntentService: IRetrievePaymentIntentService,
        @Adapter(UPDATE_PAYMENT_INTENT_SERVICE) private readonly updatePaymentIntentService: IUpdatePaymentIntentService,
        @Adapter(CONFIRM_PAYMENT_INTENT_SERVICE) private readonly confirmPaymentIntentService: IConfirmPaymentIntentService,
        @Adapter(CAPTURE_PAYMENT_INTENT_SERVICE) private readonly capturePaymentIntentService: ICapturePaymentIntentService,
        @Adapter(CANCEL_PAYMENT_INTENT_SERVICE) private readonly cancelPaymentIntentService: ICancelPaymentIntentService,
        @Adapter(LIST_ALL_PAYMENT_INTENT_SERVICE) private readonly listAllPaymentIntentService: IListAllPaymentIntentsService,
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
    async confirmPaymentIntentController(@Body() body: PaymentIntentModel, @Param() id: PaymentIntentModel): Promise<ResponsePaymentIntent> {
        try {
            const result = await this.confirmPaymentIntentService.confirmPaymentIntentService(body, id) ;
            return {error: false, msg: "CONFIRMATION_PAYMENT_INTENT_SUCCESSFUL", data: result}
        } catch (error) {
            return {error: true, msg: `CONFIRMATION_PAYMENT_INTENT_ERROR: ${error}`, data: null} 
        }
    }

    // Verificar parametros enviados
    // Las PaymentIntents no capturadas se cancelarán un número determinado de días después de su creación (7 de forma predeterminada).
    /**
     * Capturar intento de pago
     * @param body Pasar parametros para la captura por body
     * @param id Pasar id especifico de intento de pago 
     * @returns Objeto intento de pago | nulo
     */
    @Post("/capture/:id")
    async capturePaymentIntentController(@Body() body: PaymentIntentModel, @Param() id: PaymentIntentModel): Promise<ResponsePaymentIntent> {
        try {
            const result = await this.capturePaymentIntentService.capturePaymentIntentService(body, id) ;
            return {error: false, msg: "CAPTURE_PAYMENT_INTENT_SUCCESSFUL", data: result}
        } catch (error) {
            return {error: true, msg: `CAPTURE_PAYMENT_INTENT_ERROR: ${error}`, data: null} 
        }
    }

    // Un objeto PaymentIntent se puede cancelar cuando se encuentra en uno de estos estados: requires_payment_method requires_capture requires_confirmation requires_actionprocessing
    /**
     * Cancelar intento de pago
     * @param body Pasar por body el paramatro para informar causa de cancelacion 
     * cancellation_reason?: "duplicate" | "fraudulent" | "requested_by_customer" | "abandoned";
     * @param id Pasar id especifico de intento de pago 
     * @returns Objeto intento de pago | nulo
     */
    @Post("/cancel/:id")
    async cancelPaymentIntentController(@Body() body: PaymentIntentModel, @Param() id: PaymentIntentModel): Promise<ResponsePaymentIntent> {
        try {
            const result = await this.cancelPaymentIntentService.cancelPaymentIntentService(body, id) ;
            return {error: false, msg: "CANCEL_PAYMENT_INTENT_SUCCESSFUL", data: result}
        } catch (error) {
            return {error: true, msg: `CANCEL_PAYMENT_INTENT_ERROR: ${error}`, data: null} 
        }
    }

    /**
     * Cancelar intento de pago
     * @param body Pasar por body el paramatro para informar causa de cancelacion 
     * cancellation_reason?: "duplicate" | "fraudulent" | "requested_by_customer" | "abandoned";
     * @param id Pasar id especifico de intento de pago 
     * @returns Objeto intento de pago | nulo
     */
    @Get()
    async listAllPaymentIntentController(@Query() query: PaymentIntentModel): Promise<ResponsePaymentIntent> {
        try {
            const result = await this.listAllPaymentIntentService.listAllPaymentIntentService(query);
            return {error: false, msg: "LIST_ALL_PAYMENT_INTENT_SUCCESSFUL", data: result}
        } catch (error) {
            return {error: true, msg: `LIST_ALL_PAYMENT_INTENT_ERROR: ${error}`, data: null}
        }
    }
}
