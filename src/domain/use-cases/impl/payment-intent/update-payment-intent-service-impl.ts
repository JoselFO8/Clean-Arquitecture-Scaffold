import {Adapter, Service} from "@tsclean/core";
import {IUpdatePaymentIntentService} from "@/domain/use-cases/payment-intent/update-payment-intent-service";
import { IUpdatePaymentIntentRepository, UPDATE_PAYMENT_INTENT_REPOSITORY } from "@/domain/models/contracts/payment-intent/update-payment-intent-repository";
import { PaymentIntentModel } from "@/domain/models/payment-intent";

@Service()
export class UpdatePaymentIntentServiceImpl implements IUpdatePaymentIntentService {
    constructor(
        @Adapter(UPDATE_PAYMENT_INTENT_REPOSITORY) private readonly updatePaymentIntentRepository: IUpdatePaymentIntentRepository
    ) {}

    async updatePaymentIntentService(body: PaymentIntentModel, id: PaymentIntentModel): Promise<PaymentIntentModel> {
        return this.updatePaymentIntentRepository.updatePaymentIntentRepository(body, id)
    }
}