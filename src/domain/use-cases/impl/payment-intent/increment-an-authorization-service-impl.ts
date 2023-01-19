import { IIncrementAnAuthorizationRepository, INCREMENT_AN_AUTHORIZATION_REPOSITORY } from "@/domain/models/contracts/payment-intent/increment-an-authorization-repository";
import { PaymentIntentModel } from "@/domain/models/payment-intent";
import { Adapter, Service } from "@tsclean/core";
import { IIncrementAnAuthorizationService } from "../../payment-intent/increment-an-authorization-service";

@Service()
export class IncrementAnAuthorizationServiceImpl implements IIncrementAnAuthorizationService {
    constructor(
        @Adapter(INCREMENT_AN_AUTHORIZATION_REPOSITORY) private readonly incrementAnAutorizationRepository: IIncrementAnAuthorizationRepository
    ) {}

    async incrementAnAutorizationService(body: PaymentIntentModel, id: PaymentIntentModel): Promise<PaymentIntentModel> {
        return this.incrementAnAutorizationRepository.incrementAnAutorizationRepository(body, id)
    }
}