import {Adapter, Service} from "@tsclean/core";
import { IAddPaymentIntentRepository, IConfirmPaymentIntentRepository, STRIPE_REPOSITORIES } from "@/domain/models/contracts/stripe-repository";
import { IStripeService } from "../stripe-service";


// @Service()
// export class StripeServiceImpl implements IStripeService {
//     constructor(
//         @Adapter(STRIPE_REPOSITORIES.ADD_PAYMENT_INTENT_REPOSITORY) private readonly addPaymentIntentRepository: IAddPaymentIntentRepository,
//         @Adapter(STRIPE_REPOSITORIES.CONFIRM_PAYMENT_INTENT_REPOSITORY) private readonly confirmPaymentIntentRepository: IConfirmPaymentIntentRepository
//     ) {}

//     async addPaymentIntentService(data: any): Promise<any> {
//         return this.addPaymentIntentRepository.addPaymentIntentRepository(data)
//     }
//     async confirmPaymentIntentService(data: any): Promise<any> {
//         return this.confirmPaymentIntentRepository.confirmPaymentIntentRepository(data)
//     }
// }