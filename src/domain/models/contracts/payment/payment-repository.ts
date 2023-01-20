import { SessionModel } from "../../session";

export const CREATE_SESSION_REPOSITORY = "CREATE_SESSION_REPOSITORY";

export interface IPaymentRepository {
    createSessionRepository: (body: SessionModel) => Promise<SessionModel>
}
