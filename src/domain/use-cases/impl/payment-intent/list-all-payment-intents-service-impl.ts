import {Adapter, Service} from "@tsclean/core";
import {IListAllPaymentIntentsService} from "@/domain/use-cases/payment-intent/list-all-payment-intents-service";
import { IListAllPaymentIntentsRepository, LIST_ALL_PAYMENT_INTENT_REPOSITORY } from "@/domain/models/contracts/payment-intent/list-all-payment-intents-repository";
import { PaymentIntentModel } from "@/domain/models/payment-intent";

@Service()
export class ListAllPaymentIntentsServiceImpl implements IListAllPaymentIntentsService {
    constructor(
        @Adapter(LIST_ALL_PAYMENT_INTENT_REPOSITORY) private readonly listAllPaymentIntentRepository: IListAllPaymentIntentsRepository
    ) {}

    async listAllPaymentIntentService(query: PaymentIntentModel): Promise<PaymentIntentModel> {
        return this.listAllPaymentIntentRepository.listAllPaymentIntentRepository(query)
    }
}