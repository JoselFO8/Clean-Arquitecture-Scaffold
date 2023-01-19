import { PaymentIntentModel } from "../../payment-intent";

export const CANCEL_PAYMENT_INTENT_REPOSITORY = "CANCEL_PAYMENT_INTENT_REPOSITORY";

export interface ICancelPaymentIntentRepository {
    cancelPaymentIntentRepository: (body: PaymentIntentModel, id: PaymentIntentModel) => Promise<PaymentIntentModel>
}