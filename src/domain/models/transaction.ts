export type TransactionModel = {
    // Attributes
    id: number | string;
    user_id: string | number;
    current: string;
    transaction_id: string;
    reference_transaction_id: string;
    // status: enum Status {APROVED, DECLINED, VOIDED, ERROR};
    status: Status;
    // payment_method: enum paymentMethod {CARD, NEQUI, PSE, BANCOLOMBIA_TRANSFER}
    payment_method: paymentMethod;
    type_movement: string;
    amount: number;
    commission: number;
    iva: number;
    description: string;
    createAt: Date;
    updateAt: Date;
}

enum Status {
    APROVED, 
    DECLINED, 
    VOIDED, 
    ERROR
}

enum paymentMethod {
    CARD, 
    NEQUI, 
    PSE, 
    BANCOLOMBIA_TRANSFER
}

export type AddTransactionParams = Omit<TransactionModel, 'id'>
