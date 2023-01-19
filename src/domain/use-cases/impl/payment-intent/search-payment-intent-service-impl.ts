import {Adapter, Service} from "@tsclean/core";
import {ISearchPaymentIntentService} from "@/domain/use-cases/payment-intent/search-payment-intent-service";
import { ISearchPaymentIntentRepository, SEARCH_PAYMENT_INTENT_REPOSITORY } from "@/domain/models/contracts/payment-intent/search-payment-intent-repository";
import { PaymentIntentModel } from "@/domain/models/payment-intent";

@Service()
export class SearchPaymentIntentServiceImpl implements ISearchPaymentIntentService {
    constructor(
        @Adapter(SEARCH_PAYMENT_INTENT_REPOSITORY) private readonly searchPaymentIntentRepository: ISearchPaymentIntentRepository
    ) {}

    async searchPaymentIntentService(query: PaymentIntentModel): Promise<PaymentIntentModel> {
        return this.searchPaymentIntentRepository.searchPaymentIntentRepository(query)
    }
}