import { PaymentIntentModel } from "../models/payment-intent";

export const ADD_PAYMENT_INTENT_SERVICE = "ADD_PAYMENT_INTENT_SERVICE";

export interface IAddPaymentIntentService {
    addPaymentIntentService: (data: PaymentIntentModel) => Promise<any>
}