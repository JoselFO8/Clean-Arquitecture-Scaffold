import {Adapter, Service} from "@tsclean/core";
import {IAddPaymentIntentService} from "@/domain/use-cases/add-payment-intent-service";
import { ADD_PAYMENT_INTENT_REPOSITORY, IAddPaymentIntentRepository } from "@/domain/models/contracts/add-payment-intent-repository";
import { PaymentIntentModel } from "@/domain/models/payment-intent";

@Service()
export class AddPaymentIntentServiceImpl implements IAddPaymentIntentService {
    constructor(
        @Adapter(ADD_PAYMENT_INTENT_REPOSITORY) private readonly addPaymentIntentRepository: IAddPaymentIntentRepository
    ) {}

    async addPaymentIntentService(data: PaymentIntentModel): Promise<any> {
        return await this.addPaymentIntentRepository.addPaymentIntentRepository(data)
    }
}