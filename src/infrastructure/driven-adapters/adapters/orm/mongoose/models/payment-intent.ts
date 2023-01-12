import { PaymentIntentModel } from '@/domain/models/payment-intent';
import { model, Schema } from "mongoose";

const schema = new Schema<PaymentIntentModel>({
    // Implementation
    id: {type: String, required: true},
    amount: {type: Number,  required: true}
});

export const PaymentIntentModelSchema = model<PaymentIntentModel>('payment-intents', schema);
