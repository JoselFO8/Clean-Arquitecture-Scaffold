import { IAddPaymentIntentRepository } from "@/domain/models/contracts/add-payment-intent-repository";
import {PaymentIntentModel} from "@/domain/models/payment-intent";
import { Stripe } from "stripe";

const apiKey = "sk_test_51LKaEAATR7GdGLkc4i6xnMNGGjPnm6QnSt4NiLCJFWM3aQLUXPHVJNqOADyPjAmXr05o0pVIGVsckeotfJu9yxSr00awCEcsYt";

const stripe = new Stripe(apiKey, {
    apiVersion: '2022-11-15',
});

export class PaymentIntentMongooseRepositoryAdapter implements IAddPaymentIntentRepository {
    // Implementation
    
    async addPaymentIntentRepository(data: PaymentIntentModel): Promise<any> {
        try {
            const payment = await stripe.paymentIntents.create({
                amount: data.amount,
                currency: "USD",
                // description: `Sold products: ${jsonSoldProducts}`,
                description: `Sold products: Prueba`,
                payment_method: data.id,
                confirm: true
            })
            console.log(payment);
            // return {}
        } catch (error) {
            return {msg: "PAYMENT_INTENT_ERROR", error} 
        }
    }
}
