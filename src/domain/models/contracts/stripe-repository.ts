import { PaymentIntentModel } from "../payment-intent";


export const STRIPE_REPOSITORIES = {
    ADD_PAYMENT_INTENT_REPOSITORY: "ADD_PAYMENT_INTENT_REPOSITORY",
    CONFIRM_PAYMENT_INTENT_REPOSITORY: "CONFIRM_PAYMENT_INTENT_REPOSITORY"
}

// export interface IStripeRepository {
//     IAddPaymentIntentRepository: { addPaymentIntentRepository: (data: any) => Promise<any> }
//     IConfirmPaymentIntentRepository: { confirmPaymentIntentRepository: (data: any) => Promise<any> }
// }

export interface IAddPaymentIntentRepository { addPaymentIntentRepository: (data: any) => Promise<any> }
export interface IConfirmPaymentIntentRepository { confirmPaymentIntentRepository: (body: any, id: any) => Promise<any> }




