import { API_KEY } from "@/application/config/environment"
import { IAddPaymentIntentRepository } from "@/domain/models/contracts/payment-intent/add-payment-intent-repository"
import { IConfirmPaymentIntentRepository } from "@/domain/models/contracts/payment-intent/confirm-payment-intent-repository"

import { PaymentIntentModel } from "@/domain/models/payment-intent"
import axios from "axios"
import QueryString from "qs"

export class StripeAdapter implements 
    IAddPaymentIntentRepository,
    IConfirmPaymentIntentRepository
{
    // Implementation
    constructor (
        private readonly config
    ) {
        this.config = { headers:{ Authorization: `Bearer ${API_KEY}`} }
    }
    
    async addPaymentIntentRepository(data: PaymentIntentModel): Promise<any> {
        const newPaymentIntent = await axios.post(
            "https://api.stripe.com/v1/payment_intents",
            QueryString.stringify(data),
            this.config
        )

        return newPaymentIntent.data
    }

    async confirmPaymentIntentRepository(body: any, id: any): Promise<any> {
        const confirmPaymentIntent = await axios.post(
            `https://api.stripe.com/v1/payment_intents/${id}/confirm`,
            QueryString.stringify(body),
            this.config
        )    
    
        return confirmPaymentIntent.data
    }
}