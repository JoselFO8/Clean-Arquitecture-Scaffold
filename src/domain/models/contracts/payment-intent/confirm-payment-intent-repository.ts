import { PaymentIntentModel } from "../../payment-intent";

export const CONFIRM_PAYMENT_INTENT_REPOSITORY = "CONFIRM_PAYMENT_INTENT_REPOSITORY";

export interface IConfirmPaymentIntentRepository {
    confirmPaymentIntentRepository: (body: PaymentIntentModel, id: PaymentIntentModel) => Promise<PaymentIntentModel>
}