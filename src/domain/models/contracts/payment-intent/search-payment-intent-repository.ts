import { PaymentIntentModel } from "../../payment-intent";

export const SEARCH_PAYMENT_INTENT_REPOSITORY = "SEARCH_PAYMENT_INTENT_REPOSITORY";

export interface ISearchPaymentIntentRepository {
    searchPaymentIntentRepository: (query: PaymentIntentModel) => Promise<PaymentIntentModel>
}