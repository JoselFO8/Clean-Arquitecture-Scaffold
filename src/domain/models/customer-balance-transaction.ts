export type CustomerBalanceTransactionModel = {
    // Attributes

    id: string;
    object: string;
    amount: number;
    created: Date;
    credit_note: string;
    currency: any; // Currency
    customer: string;
    description: string;
    ending_balance: number;
    invoice: string,
    livemode: boolean,
    metadata: {},
    type: string
    
}

export type AddCustomerBalanceTransactionParams = Omit<CustomerBalanceTransactionModel, 'id'>

export interface ResponseCustomerBalanceTransaction {
    error: boolean;
    msg: string;
    data: CustomerBalanceTransactionModel;
}