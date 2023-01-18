import { PaymentIntentModel } from "../../payment-intent";

export const CAPTURE_PAYMENT_INTENT_REPOSITORY = "CAPTURE_PAYMENT_INTENT_REPOSITORY";

export interface ICapturePaymentIntentRepository {
    capturePaymentIntentRepository: (body: PaymentIntentModel, id: PaymentIntentModel) => Promise<PaymentIntentModel>
}