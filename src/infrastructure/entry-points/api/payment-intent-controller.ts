import { PaymentIntentModel } from "@/domain/models/payment-intent";
import { ADD_PAYMENT_INTENT_SERVICE, IAddPaymentIntentService } from "@/domain/use-cases/add-payment-intent-service";
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
    // async addPaymentIntentController(@Body() data: PaymentIntentModel): Promise<void> {
    //     this.addPaymentIntentService.addPaymentIntentService(data);
    //     return 
    // }

    @Post()
    async addPaymentIntentController(@Body() data: any): Promise<any> {
        // try {
        //     console.log("Prueba nodemon JLF");
        //     console.log(data);
        //     this.addPaymentIntentService.addPaymentIntentService(data);
        //     return data
        // } catch (error) {
        //     return error
        // }
        
        // console.log("Prueba nodemon JLF");
        // console.log(data);
        const paymentIntentResult = await this.addPaymentIntentService.addPaymentIntentService(data);
        
        return paymentIntentResult
    }
}
