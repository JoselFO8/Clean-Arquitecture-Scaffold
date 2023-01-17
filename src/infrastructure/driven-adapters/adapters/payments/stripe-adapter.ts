import { API_KEY } from "@/application/config/environment"
import { IAddPaymentIntentRepository } from "@/domain/models/contracts/payment-intent/add-payment-intent-repository"
import { PaymentIntentModel } from "@/domain/models/payment-intent"
import axios from "axios"
import QueryString from "qs"

export class StripeAdapter implements IAddPaymentIntentRepository {
    // Implementation
    constructor (
    //     private readonly stripe
        private readonly config
    ) {
    //     this.stripe = new Stripe(API_KEY, { apiVersion: '2022-11-15' })
    
        this.config = { headers:{ Authorization: `Bearer ${API_KEY}`} }
    }
    
    async addPaymentIntentRepository(data: PaymentIntentModel): Promise<any> {
        // Tipado
        // return this.stripe.paymentIntents.create({
        //     amount: data.amount,
        //     currency: "USD",
        //     // description: `Sold products: ${jsonSoldProducts}`,
        //     description: `Sold products: Prueba`,
        //     payment_method: data.id,
        //     confirm: true
        // })
        const newPaymentIntent = await axios.post(
            "https://api.stripe.com/v1/payment_intents",
            QueryString.stringify(data),
            this.config
        )

        return newPaymentIntent.data
    }
}