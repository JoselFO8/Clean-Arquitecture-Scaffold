import { PaymentIntentModel } from "../../payment-intent";

export const LIST_ALL_PAYMENT_INTENT_REPOSITORY = "LIST_ALL_PAYMENT_INTENT_REPOSITORY";

export interface IListAllPaymentIntentsRepository {
    listAllPaymentIntentRepository: (query: PaymentIntentModel) => Promise<PaymentIntentModel>
}