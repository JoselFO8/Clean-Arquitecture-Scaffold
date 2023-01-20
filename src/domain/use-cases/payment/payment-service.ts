import { AddSessionParams, SessionModel } from "@/domain/models/session";

export const CREATE_SESSION_SERVICE = "CREATE_SESSION_SERVICE";

export const RETRIEVE_SESSION_SERVICE = "RETRIEVE_SESSION_SERVICE";

export interface IPaymentService {
    createSessionService: (body: AddSessionParams) => Promise<SessionModel>
    retrieveSessionService: (id: SessionModel) => Promise<SessionModel>
}