import { PaymentIntentModel } from "@/domain/models/payment-intent";

export const SEARCH_PAYMENT_INTENT_SERVICE = "SEARCH_PAYMENT_INTENT_SERVICE";

export interface ISearchPaymentIntentService {
    searchPaymentIntentService: (query: PaymentIntentModel) => Promise<PaymentIntentModel>
}