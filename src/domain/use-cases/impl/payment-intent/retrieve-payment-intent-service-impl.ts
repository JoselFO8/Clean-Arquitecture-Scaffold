import {Adapter, Service} from "@tsclean/core";
import {IRetrievePaymentIntentService} from "@/domain/use-cases/payment-intent/retrieve-payment-intent-service";
import { IRetrievePaymentIntentRepository, RETRIEVE_PAYMENT_INTENT_REPOSITORY } from "@/domain/models/contracts/payment-intent/retrieve-payment-intent-repository";
import { PaymentIntentModel } from "@/domain/models/payment-intent";

@Service()
export class RetrievePaymentIntentServiceImpl implements IRetrievePaymentIntentService {
    constructor(
        @Adapter(RETRIEVE_PAYMENT_INTENT_REPOSITORY) private readonly retrievePaymentIntentRepository: IRetrievePaymentIntentRepository
    ) {}

    async retrievePaymentIntentService(id: PaymentIntentModel): Promise<any> {
        return this.retrievePaymentIntentRepository.retrievePaymentIntentRepository(id)
    } 
}