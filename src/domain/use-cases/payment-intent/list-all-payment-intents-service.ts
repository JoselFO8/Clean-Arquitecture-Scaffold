import { PaymentIntentModel } from "@/domain/models/payment-intent";

export const LIST_ALL_PAYMENT_INTENT_SERVICE = "LIST_ALL_PAYMENT_INTENT_SERVICE";

export interface IListAllPaymentIntentsService {
    listAllPaymentIntentService: (query: PaymentIntentModel) => Promise<PaymentIntentModel>
}