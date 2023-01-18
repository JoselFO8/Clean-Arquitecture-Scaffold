import { PaymentIntentModel } from "@/domain/models/payment-intent";

export const UPDATE_PAYMENT_INTENT_SERVICE = "UPDATE_PAYMENT_INTENT_SERVICE";

export interface IUpdatePaymentIntentService {
    updatePaymentIntentService: (body: PaymentIntentModel, id: PaymentIntentModel) => Promise<PaymentIntentModel>
}