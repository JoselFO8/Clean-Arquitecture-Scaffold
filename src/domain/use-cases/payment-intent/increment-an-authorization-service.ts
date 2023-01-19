import { PaymentIntentModel } from "@/domain/models/payment-intent";

export const INCREMENT_AN_AUTHORIZATION_SERVICE = "INCREMENT_AN_AUTHORIZATION_SERVICE";

export interface IIncrementAnAuthorizationService {
    incrementAnAutorizationService: (body: PaymentIntentModel, id: PaymentIntentModel) => Promise<PaymentIntentModel>
}