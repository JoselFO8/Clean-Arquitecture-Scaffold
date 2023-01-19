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
    //* POST /v1/payment_intents
    //* GET  /v1/payment_intents/:id
    //* POST /v1/payment_intents/:id
    //* POST /v1/payment_intents/:id/confirm
    //* POST /v1/payment_intents/:id/capture
    //* POST /v1/payment_intents/:id/cancel
    //* GET  /v1/payment_intents
    // POST /v1/payment_intents/:id/increment_authorization
    // GET  /v1/payment_intents/search
    // POST /v1/payment_intents/:id/verify_microdeposits
    // POST /v1/payment_intents/:id/apply_customer_balance

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
            `${this.stripeUrl}/payment_intents/${id.id}`,
            QueryString.stringify(body),
            this.config
        )
        return capturePaymentIntent.data
    }

    /**
     * Capturar intento de pago
     * Enviar secret key
     * @param body Recibe parametros para la captura por body
     * @param id Recibe id especifico de intento de pago
     * @returns Objeto intento de pago | error
     */
    async cancelPaymentIntentRepository(body: any, id: any): Promise<any> {
        const cancelPaymentIntent = await axios.post(
            `${this.stripeUrl}/payment_intents/${id.id}/cancel`,
            QueryString.stringify(body),
            this.config
        )
        return cancelPaymentIntent.data
    }

    // https://api.stripe.com/v1/payment_intents

    // CORREGIR MEDIANTE UNAFUNCION QUE DETERMINE EL QUERY Q LLEGA

    /**
     * Capturar intento de pago
     * Enviar secret key
     * @param id Recibe id especifico de intento de pago
     * @returns Objeto intento de pago | error
     */
    async listAllPaymentIntentRepository(query: any): Promise<any> {
        console.log({query});
        
        const listAllPaymentIntent = await axios.get(
            `${this.stripeUrl}/payment_intents${!query && query.limit ? "" : `?limit=${query.limit}` }`,
            this.config
        )
        return listAllPaymentIntent.data
    }

    // https://api.stripe.com/v1/payment_intents/pi_1DsvJ12eZvKYlo2CXq3aSyxd/increment_authorization
    
    // async incrementAnAutorizationRepository(query: any): Promise<any> {
    /**
     * Confirmar intento de pago
     * Enviar secret key
     * @param body Recibe forma de pago por body
     * @param id Recibe id especifico de intento de pago
     * @returns Objeto intento de pago | error
     */
    async incrementAnAutorizationRepository(body: any, id: any): Promise<any> {
        const incrementAnAutorization = await axios.post(
            `${this.stripeUrl}/payment_intents/${id.id}/increment_authorization`,
            QueryString.stringify(body),
            this.config
        )
        return incrementAnAutorization.data
    }

    // https://api.stripe.com/v1/payment_intents/search
    /**
     * Capturar intento de pago
     * Enviar secret key
     * @param id Recibe id especifico de intento de pago
     * @returns Objeto intento de pago | error
     */
    async searchPaymentIntentRepository(query: any): Promise<any> {
        // console.log(`${this.stripeUrl}/payment_intents/search${query}`);
        
        // De objeto a query strings
        console.log(QueryString.stringify(query));
        
        const searchPaymentIntent = await axios.get(
            // `${this.stripeUrl}/payment_intents/search${query ? `?${query}` : ""}`,
            `${this.stripeUrl}/payment_intents/search?query=status:'succeeded'`,
            this.config
        )
        return searchPaymentIntent.data
        // return "pruebas desde searchPaymentIntentRepository"
    }

    
}