// export type PaymentIntentModel = {
//     // Attributes
//     id: string;
//     amount: number;
//     // currency: string;
//     // description: string;
//     // payment_method: string;
//     // confirm: boolean;
// }

// export type AddPaymentIntentParams = Omit<PaymentIntentModel, 'id'>


export type PaymentIntentModel = {
    // Attributes
    id: number | string;
    source_payment_id: number;
    type_payment_method: string;
    user_id: number;
    createAt: Date;
    updateAt: Date;

    amount: number
}

export type AddPaymentIntentParams = Omit<PaymentIntentModel, 'id'>


