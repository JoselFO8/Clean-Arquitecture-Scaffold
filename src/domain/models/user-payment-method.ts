export type UserPaymentMethodModel = {
    // Attributes
    id: number | string;
    source_payment_id: number;
    type_payment_method: string;
    user_id: number;
    createAt: Date;
    updateAt: Date;
}

export type AddUserPaymentMethodParams = Omit<UserPaymentMethodModel, 'id'>
