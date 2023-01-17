import { PaymentIntentModel } from "@/domain/models/payment-intent";
import { ADD_PAYMENT_INTENT_SERVICE, IAddPaymentIntentService } from "@/domain/use-cases/payment-intent/add-payment-intent-service";
import {Adapter, Body, Get, Mapping, Post} from "@tsclean/core";

@Mapping('payment-intent')
export class PaymentIntentController {
    constructor(
        @Adapter(ADD_PAYMENT_INTENT_SERVICE) private readonly addPaymentIntentService: IAddPaymentIntentService
    ) {}

    @Get()
    get(): string {
        return "Prueba desde PaymentIntentController"
    }

    // @Post()
    // async addPaymentIntentController(@Body() data: any): Promise<any> {
    //     try {
    //         const payment = await this.addPaymentIntentService.addPaymentIntentService(data);
    //         return {error: false, msg: "SUCCESSFUL_TRANSFER", data: payment}
    //     } catch (error) {
    //         console.log(error);
    //         return {error: true, msg: `PAYMENT_INTENT_ERROR: ${error}`, data: null} 
    //     }
    // }

    // @Post()
    // async addPaymentIntentController(@Body() data: any) => {
    //     try {
    //         const paymentIntentResult = 
    //     } catch (error) {
            
    //     }
    // }
}
