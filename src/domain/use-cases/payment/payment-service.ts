import { SessionModel } from "@/domain/models/session";

export const CREATE_SESSION_SERVICE = "CREATE_SESSION_SERVICE";

export interface IPaymentService {
    createSessionService: (body: SessionModel) => Promise<SessionModel>
}