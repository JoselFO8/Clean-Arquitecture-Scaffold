import {Adapter, Service} from "@tsclean/core";
import {IPaymentService} from "@/domain/use-cases/payment/payment-service";
import { SessionModel } from "@/domain/models/session";
import { CREATE_SESSION_REPOSITORY, IPaymentRepository } from "@/domain/models/contracts/payment/payment-repository";

@Service()
export class PaymentServiceImpl implements IPaymentService {
    constructor(
        @Adapter(CREATE_SESSION_REPOSITORY) private readonly createSessionRepository: IPaymentRepository
    ) {}

    async createSessionService(body: SessionModel): Promise<SessionModel> {
        return this.createSessionRepository.createSessionRepository(body)
    }
}