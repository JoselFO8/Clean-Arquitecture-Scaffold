export type SessionModel = {
    // Attributes

    id: string;
    object: string;
    accountholder: {
        account?: string;
        customer?: string;
        type: "account" | "customer";
    };
    linked_accounts: { // accounts
        object: string;
        data: []; // array of hashes
        has_more: boolean;
        url: string;
    };
    client_secret: string;
    filters: { // hash
        countries: string[];
    };
    livemode: boolean;
    permissions: permissionsEnum[];

}

enum permissionsEnum {
    payment_method,
    balances,
    transactions,
    ownership
}

export type AddSessionParams = Omit<SessionModel, 'id'>

export interface ResponseSession {
    error: boolean;
    msg: string;
    data: SessionModel;
}
