import { API_KEY } from "@/application/config/environment"
import { IAddPaymentIntentRepository } from "@/domain/models/contracts/payment-intent/add-payment-intent-repository"
import { IConfirmPaymentIntentRepository } from "@/domain/models/contracts/payment-intent/confirm-payment-intent-repository"

import { PaymentIntentModel } from "@/domain/models/payment-intent"
import axios from "axios"
import QueryString from "qs"

export class StripeAdapter implements 
    IAddPaymentIntentRepository,
    IConfirmPaymentIntentRepository
{
    // Implementation
    constructor (
        private readonly config,
        private readonly stripeUrl
    ) {
        this.config = { headers:{ Authorization: `Bearer ${API_KEY}`} }
        this.stripeUrl = "https://api.stripe.com/v1"
    }

    /**
     * Crear intento de pago
     * Enviar secret key
     * @param data Recibe parametros por body para crear intento de pago
     * @returns Objeto intento de pago | error
     */
    async addPaymentIntentRepository(data: PaymentIntentModel): Promise<any> {
        const newPaymentIntent = await axios.post(
            `${this.stripeUrl}/payment_intents`,
            QueryString.stringify(data),
            this.config
        )
        return newPaymentIntent.data
    }

    /**
     * Recuperar un intento de pago
     * Enviar secret key
     * @param id Recibe id especifico de intento de pago
     * @returns Objeto intento de pago | error
     */
    async retrievePaymentIntentRepository(id: any): Promise<any> {
        const retrievePaymentIntent = await axios.get(
            `${this.stripeUrl}/payment_intents/${id.id}`,
            this.config
        )
        return retrievePaymentIntent.data
    }

    /**
     * Actualizar intento de pago
     * Enviar secret key
     * @param body Recibe parametros por body a actualizar
     * @param id Recibe id especifico de intento de pago
     * @returns Objeto intento de pago actualizado | error
     */
    async updatePaymentIntentRepository(body: PaymentIntentModel, id: PaymentIntentModel): Promise<PaymentIntentModel> {
        console.log(body, id.id);
        
        const updatePaymentIntent = await axios.post(
            `${this.stripeUrl}/payment_intents/${id.id}`,
            QueryString.stringify(body),
            this.config
        )
        return updatePaymentIntent.data
    }

    /**
     * Confirmar intento de pago
     * Enviar secret key
     * @param body Recibe forma de pago por body
     * @param id Recibe id especifico de intento de pago
     * @returns Objeto intento de pago | error
     */
    async confirmPaymentIntentRepository(body: any, id: any): Promise<any> {
        const confirmPaymentIntent = await axios.post(
            `${this.stripeUrl}/payment_intents/${id.id}/confirm`,
            QueryString.stringify(body),
            this.config
        )
        return confirmPaymentIntent.data
    }
    
    /**
     * Capturar intento de pago
     * Enviar secret key
     * @param body Recibe parametros para la captura por body
     * @param id Recibe id especifico de intento de pago
     * @returns Objeto intento de pago | error
     */
    async capturePaymentIntentRepository(body: any, id: any): Promise<any> {
        const capturePaymentIntent = await axios.post(
            `${this.stripeUrl}/payment_intents/${id.id}/capture`,
            QueryString.stringify(body),
            this.config
        )
        return capturePaymentIntent.data
    }
}