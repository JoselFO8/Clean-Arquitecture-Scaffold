export const CONFIRM_PAYMENT_INTENT_SERVICE = "CONFIRM_PAYMENT_INTENT_SERVICE";

export interface IConfirmPaymentIntentService {
    confirmPaymentIntentService: (body: any, id: any) => Promise<any>
}