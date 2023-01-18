import { ADD_PAYMENT_INTENT_SERVICE, IAddPaymentIntentService } from "@/domain/use-cases/payment-intent/add-payment-intent-service";
import { CONFIRM_PAYMENT_INTENT_SERVICE, IConfirmPaymentIntentService } from "@/domain/use-cases/payment-intent/confirm-payment-intent-service";
import {Adapter, Body, Get, Mapping, Param, Post} from "@tsclean/core";

@Mapping('payment-intent')
export class PaymentIntentController {
    constructor(
        @Adapter(ADD_PAYMENT_INTENT_SERVICE) private readonly addPaymentIntentService: IAddPaymentIntentService,
        @Adapter(CONFIRM_PAYMENT_INTENT_SERVICE) private readonly confirmPaymentIntentService: IConfirmPaymentIntentService
    ) {}

    @Get()
    get(): string {
        return "Prueba desde PaymentIntentController"
    }

    @Post()
    async addPaymentIntentController(@Body() data: any): Promise<any> {
        try {
            const result = await this.addPaymentIntentService.addPaymentIntentService(data);
            return {error: false, msg: "SUCCESSFUL_PAYMENT_INTENT", data: result}
        } catch (error) {
            return {error: true, msg: `PAYMENT_INTENT_ERROR: ${error}`, data: null} 
        }
    }

    @Post("/confirm/:id")
    async confirmPaymentIntentController(@Body() body: any, @Param() {id}: any): Promise<any> {
        try {
            console.log(body, id);
            
            const result = await this.confirmPaymentIntentService.confirmPaymentIntentService(body, id) ;
            return {error: false, msg: "SUCCESSFUL_CONFIRMATION_PAYMENT_INTENT", data: result}
        } catch (error) {
            return {error: true, msg: `CONFIRMATION_PAYMENT_INTENT_ERROR: ${error}`, data: null} 
        }
    }
}
