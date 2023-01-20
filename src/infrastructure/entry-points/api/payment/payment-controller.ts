import { ResponseSession, SessionModel } from "@/domain/models/session";
import { CREATE_SESSION_SERVICE, IPaymentService, RETRIEVE_SESSION_SERVICE } from "@/domain/use-cases/payment/payment-service";
import {Adapter, Body, Get, Mapping, Param, Post} from "@tsclean/core";

@Mapping('payment')
export class PaymentController {
    constructor(
        @Adapter(CREATE_SESSION_SERVICE) private readonly createSessionService: IPaymentService,
        @Adapter(RETRIEVE_SESSION_SERVICE) private readonly retrieveSessionService: IPaymentService
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

    /**
     * Recuperar session
     * @param body Recibe id de la session
     * @returns Objeto session | error
     */
    @Get('/session/retrieve/:id')
    async retrieveSessionController(@Param() id: SessionModel): Promise<any> {
        try {
            const result = await this.retrieveSessionService.retrieveSessionService(id);
            return {error: false, msg: "CREATE_SESSION_SUCCESSFUL", data: result}
        } catch (error) {
            return {error: true, msg: {description: `CREATE_SESSION_ERROR: ${error}`, error: error.response.data.error}, data: null} 
        }
    }
}
