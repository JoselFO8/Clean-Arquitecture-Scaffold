import { PaymentIntentModel } from "../../payment-intent";

export const INCREMENT_AN_AUTHORIZATION_REPOSITORY = "INCREMENT_AN_AUTHORIZATION_REPOSITORY";

export interface IIncrementAnAuthorizationRepository {
    incrementAnAutorizationRepository: (body: PaymentIntentModel, id: PaymentIntentModel) => Promise<PaymentIntentModel>
}