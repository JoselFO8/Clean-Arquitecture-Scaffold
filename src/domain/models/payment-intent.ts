export type PaymentIntentModel = {
    // Attributes
    id: string;
    amount: number;
    // currency: string;
    // description: string;
    // payment_method: string;
    // confirm: boolean;
}

export type AddPaymentIntentParams = Omit<PaymentIntentModel, 'id'>
