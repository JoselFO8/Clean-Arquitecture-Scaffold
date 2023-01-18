import { PaymentIntentModel } from "@/domain/models/payment-intent";

export const CONFIRM_PAYMENT_INTENT_SERVICE = "CONFIRM_PAYMENT_INTENT_SERVICE";

export interface IConfirmPaymentIntentService {
    confirmPaymentIntentService: (body: PaymentIntentModel, id: PaymentIntentModel) => Promise<PaymentIntentModel>
}