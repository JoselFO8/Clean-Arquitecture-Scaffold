import { PaymentIntentModel } from "@/domain/models/payment-intent";

export const CANCEL_PAYMENT_INTENT_SERVICE = "CANCEL_PAYMENT_INTENT_SERVICE";

export interface ICancelPaymentIntentService {
    cancelPaymentIntentService: (body: PaymentIntentModel, id: PaymentIntentModel) => Promise<PaymentIntentModel>
}