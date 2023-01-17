export const STRIPE_SERVICES = {
    ADD_PAYMENT_INTENT_SERVICE: "ADD_PAYMENT_INTENT_SERVICE",
    CONFIRM_PAYMENT_INTENT_SERVICE: "CONFIRM_PAYMENT_INTENT_SERVICE"
}

export interface IStripeService {
    // addPaymentIntentService: { addPaymentIntentService: (data: any) => Promise<any> }
    // IConfirmPaymentIntentService: { confirmPaymentIntentService: (data: any) => Promise<any> }
    IAddPaymentIntentService: IAddPaymentIntentService;
    IConfirmPaymentIntentService: IConfirmPaymentIntentService;
}

export interface IAddPaymentIntentService { addPaymentIntentService: (data: any) => Promise<any> }

export interface IConfirmPaymentIntentService { confirmPaymentIntentService: (data: any) => Promise<any> }