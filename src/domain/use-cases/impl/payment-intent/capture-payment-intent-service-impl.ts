import {Adapter, Service} from "@tsclean/core";
import {ICapturePaymentIntentService} from "@/domain/use-cases/payment-intent/capture-payment-intent-service";
import { CAPTURE_PAYMENT_INTENT_REPOSITORY, ICapturePaymentIntentRepository } from "@/domain/models/contracts/payment-intent/capture-payment-intent-repository";
import { PaymentIntentModel } from "@/domain/models/payment-intent";

@Service()
export class CapturePaymentIntentServiceImpl implements ICapturePaymentIntentService {
    constructor(
        @Adapter(CAPTURE_PAYMENT_INTENT_REPOSITORY) private readonly capturePaymentIntentRepository: ICapturePaymentIntentRepository
    ) {}

    async capturePaymentIntentService(body: PaymentIntentModel, id: PaymentIntentModel): Promise<PaymentIntentModel> {
        return this.capturePaymentIntentRepository.capturePaymentIntentRepository(body, id)
    }
}