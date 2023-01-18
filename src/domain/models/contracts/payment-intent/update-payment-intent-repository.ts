import { PaymentIntentModel } from "../../payment-intent";

export const UPDATE_PAYMENT_INTENT_REPOSITORY = "UPDATE_PAYMENT_INTENT_REPOSITORY";

export interface IUpdatePaymentIntentRepository {
    updatePaymentIntentRepository: (body: PaymentIntentModel, id: PaymentIntentModel) => Promise<PaymentIntentModel>
}