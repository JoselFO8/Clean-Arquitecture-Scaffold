import {Adapter, Service} from "@tsclean/core";
import {ICancelPaymentIntentService} from "@/domain/use-cases/payment-intent/cancel-payment-intent-service";
import { CANCEL_PAYMENT_INTENT_REPOSITORY, ICancelPaymentIntentRepository } from "@/domain/models/contracts/payment-intent/cancel-payment-intent-repository";
import { PaymentIntentModel } from "@/domain/models/payment-intent";

@Service()
export class CancelPaymentIntentServiceImpl implements ICancelPaymentIntentService {
    constructor(
        @Adapter(CANCEL_PAYMENT_INTENT_REPOSITORY) private readonly cancelPaymentIntentRepository: ICancelPaymentIntentRepository
    ) {}

    async cancelPaymentIntentService(body: PaymentIntentModel, id: PaymentIntentModel): Promise<PaymentIntentModel> {
        return this.cancelPaymentIntentRepository.cancelPaymentIntentRepository(body, id)
    }
}