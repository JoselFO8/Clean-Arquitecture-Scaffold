export const CONFIRM_PAYMENT_INTENT_REPOSITORY = "CONFIRM_PAYMENT_INTENT_REPOSITORY";

export interface IConfirmPaymentIntentRepository {
    confirmPaymentIntentRepository: (body: any, id: any) => Promise<any>
}