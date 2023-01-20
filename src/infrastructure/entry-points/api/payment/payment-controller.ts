import { ResponseSession, SessionModel } from "@/domain/models/session";
import { CREATE_SESSION_SERVICE, IPaymentService } from "@/domain/use-cases/payment/payment-service";
import {Adapter, Body, Mapping, Post} from "@tsclean/core";

@Mapping('payment')
export class PaymentController {
    constructor(
        @Adapter(CREATE_SESSION_SERVICE) private readonly createSessionService: IPaymentService
    ) {}

    /**
     * Crear session
     * @param body Recibe parametros por body
     * @returns Objeto session | error
     */
    @Post('/session/create')
    // async createSessionController(@Body() body: SessionModel): Promise<ResponseSession> {
    async createSessionController(@Body() body: SessionModel): Promise<any> {
        try {
            const result = await this.createSessionService.createSessionService(body);
            return {error: false, msg: "CREATE_SESSION_SUCCESSFUL", data: result}
        } catch (error) {
            return {error: true, msg: {description: `CREATE_SESSION_ERROR: ${error}`, error: error.response.data.error}, data: null} 
        }
    }
}
