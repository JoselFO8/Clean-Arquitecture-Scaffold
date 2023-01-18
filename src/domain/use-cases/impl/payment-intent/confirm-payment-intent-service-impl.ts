import {Adapter, Service} from "@tsclean/core";
import {IConfirmPaymentIntentService} from "@/domain/use-cases/payment-intent/confirm-payment-intent-service";
import { CONFIRM_PAYMENT_INTENT_REPOSITORY, IConfirmPaymentIntentRepository } from "@/domain/models/contracts/payment-intent/confirm-payment-intent-repository";
import { PaymentIntentModel } from "@/domain/models/payment-intent";

@Service()
export class ConfirmPaymentIntentServiceImpl implements IConfirmPaymentIntentService {
    constructor(
        @Adapter(CONFIRM_PAYMENT_INTENT_REPOSITORY) private readonly confirmPaymentIntentRepository: IConfirmPaymentIntentRepository
    ) {}

    async confirmPaymentIntentService(body: PaymentIntentModel, id: PaymentIntentModel): Promise<PaymentIntentModel> {
        return this.confirmPaymentIntentRepository.confirmPaymentIntentRepository(body, id)
    }
}