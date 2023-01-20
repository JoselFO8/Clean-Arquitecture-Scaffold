import { AddSessionParams, SessionModel } from "../../session";

export const CREATE_SESSION_REPOSITORY = "CREATE_SESSION_REPOSITORY";

export const RETRIEVE_SESSION_REPOSITORY = "RETRIEVE_SESSION_REPOSITORY";

export interface IPaymentRepository {
    createSessionRepository: (body: AddSessionParams) => Promise<SessionModel>
    retrieveSessionRepository: (id: SessionModel) => Promise<SessionModel>
}
