import { PaymentIntentModel } from "../../payment-intent";

export const ADD_PAYMENT_INTENT_REPOSITORY = "ADD_PAYMENT_INTENT_REPOSITORY"; 

export interface IAddPaymentIntentRepository {
    addPaymentIntentRepository: (body: PaymentIntentModel) => Promise<PaymentIntentModel>
}