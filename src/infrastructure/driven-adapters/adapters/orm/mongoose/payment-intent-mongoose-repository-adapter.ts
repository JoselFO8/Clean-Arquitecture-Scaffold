import { API_KEY } from "@/application/config/environment";
import { IAddPaymentIntentRepository } from "@/domain/models/contracts/add-payment-intent-repository";
import {PaymentIntentModel} from "@/domain/models/payment-intent";
import { Stripe } from "stripe";



export class PaymentIntentMongooseRepositoryAdapter implements IAddPaymentIntentRepository {
    // Implementation
    
    constructor (
        private readonly stripe
    ) {
        this.stripe = new Stripe(API_KEY, { apiVersion: '2022-11-15' })
    }
    
    async addPaymentIntentRepository(data: PaymentIntentModel): Promise<any> {
        // Tipado
        return this.stripe.paymentIntents.create({
            amount: data.amount,
            currency: "USD",
            // description: `Sold products: ${jsonSoldProducts}`,
            description: `Sold products: Prueba`,
            payment_method: data.id,
            confirm: true
        })
    }
}
