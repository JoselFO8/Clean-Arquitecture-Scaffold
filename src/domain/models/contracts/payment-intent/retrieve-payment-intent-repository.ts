import { PaymentIntentModel } from "../../payment-intent";

export const RETRIEVE_PAYMENT_INTENT_REPOSITORY = "RETRIEVE_PAYMENT_INTENT_REPOSITORY"

export interface IRetrievePaymentIntentRepository {
    retrievePaymentIntentRepository: (id: PaymentIntentModel) => Promise<PaymentIntentModel>
}