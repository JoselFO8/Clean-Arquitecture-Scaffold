import { PaymentIntentModel } from "@/domain/models/payment-intent";

export const RETRIEVE_PAYMENT_INTENT_SERVICE = "RETRIEVE_PAYMENT_INTENT_SERVICE"

export interface IRetrievePaymentIntentService {
    retrievePaymentIntentService: (id: PaymentIntentModel) => Promise<PaymentIntentModel>
}