import { PaymentIntentModel } from "@/domain/models/payment-intent";

export const CAPTURE_PAYMENT_INTENT_SERVICE = "CAPTURE_PAYMENT_INTENT_SERVICE";

export interface ICapturePaymentIntentService {
    capturePaymentIntentService: (body: PaymentIntentModel, id: PaymentIntentModel) => Promise<PaymentIntentModel>
}