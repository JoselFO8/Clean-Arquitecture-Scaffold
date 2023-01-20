import {Adapter, Service} from "@tsclean/core";
import {IPaymentService} from "@/domain/use-cases/payment/payment-service";
import { AddSessionParams, SessionModel } from "@/domain/models/session";
import { CREATE_SESSION_REPOSITORY, IPaymentRepository, RETRIEVE_SESSION_REPOSITORY } from "@/domain/models/contracts/payment/payment-repository";

@Service()
export class PaymentServiceImpl implements IPaymentService {
    constructor(
        @Adapter(CREATE_SESSION_REPOSITORY) private readonly createSessionRepository: IPaymentRepository,
        @Adapter(RETRIEVE_SESSION_REPOSITORY) private readonly retrieveSessionRepository: IPaymentRepository
    ) {}

    async createSessionService(body: AddSessionParams): Promise<SessionModel> {
        return this.createSessionRepository.createSessionRepository(body)
    }

    async retrieveSessionService(id: SessionModel): Promise<SessionModel> {
        return this.retrieveSessionRepository.retrieveSessionRepository(id)
    }
}