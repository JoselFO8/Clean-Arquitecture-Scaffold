// export type PaymentIntentModel = {
//     // Attributes
//     id: string;
//     amount: number;
//     // currency: string;
//     // description: string;
//     // payment_method: string;
//     // confirm: boolean;
// }

// export type AddPaymentIntentParams = Omit<PaymentIntentModel, 'id'>

// --------------------------- MODELO JONATHAN --------------------------- //
// export type PaymentIntentModel = {
//     // Attributes
//     id: number | string;
//     source_payment_id: number;
//     type_payment_method: string;
//     user_id: number;
//     createAt: Date;
//     updateAt: Date;
// }

export type PaymentIntentModel = {
  // Attributes
  id?: number | string;
  amount?: number; // Requerido
  currency?: string; // Requerido

  object?: string; // Verificar
  application_fee_amount?: any; // Verificar metodo?
  automatic_payment_methods?: {};
  capture_method?: "automatic" | "manual"; // Controla cuándo se capturarán los fondos de la cuenta del cliente.
  confirm?: boolean;
  confirmation_method?: "automatic" | "manual"; // automatic - Se puede confirmar mediante una clave publicable (No require CONFIRMACION adicional). | manual - Todos los intentos de pago deben realizarse utilizando una clave secreta; requiere confirmacion.  
  customer?: string;
  description?: string;
  metadata?: {};
  on_behalf_of?: string; // El ID de cuenta de Stripe al que están destinados estos fondos. CUENTAS CONECTADAS.
  payment_method?: {}; // Verificar
  payment_method_options?: {}; // Configuración específica del método de pago para este PaymentIntent. EJ: Alipay o debito ACSS
  payment_method_types?: string[];
  receipt_email?: string; // Si se especifica enviará el recibo del pago resultante a este correo
  setup_future_usage?: "on_session" | "off_session"; //Validar
  statement_descriptor?: string; // Para los cargos que no son de tarjeta puede utilizar este valor como la descripción completa min 1 letra max 22
  statement_descriptor_suffix?: string; // Proporciona información sobre un pago con tarjeta que los clientes ven en sus extractos.
  transfer_data?: {}; // Parámetros utilizados para crear automáticamente una transferencia cuando el pago se realiza correctamente. --> // destination (REQUERIDO) cargos exitosos se atribuirán al destino Cuenta para la declaración de impuestos y los fondos de los cargos serán transferidos a la cuenta de destino. --> // amount - La cantidad que se transferirá automáticamente cuando un cargo tenga éxito. El monto está limitado al monto total de la transacción y si no se establece ningún monto Se transfiere el importe total.
  transfer_group?: string; // Una cadena que identifica el pago resultante como parte de un grupo. 
  off_session?: true | null;
  // return_url: // Redirigir a una url

  amount_capturable?: number;
  amount_details?: { tip?: {} };
  amount_received?: number;
  application?: any
  canceled_at?: any;
  cancellation_reason?: any;
  client_secret?: string;
  created?: Date | number;
  invoice?: any;
  last_payment_error?: any;
  latest_charge?: any;
  livemode?: boolean;
  next_action?: any;
  processing?: any;
  redaction?: any;
  review?: any;
  shipping?: {};
  status?: any;
}

export type PaymentIntentParams = Omit<PaymentIntentModel, 'id'>

export interface ResponsePaymentIntent {
  error: boolean;
  msg: string;
  data: PaymentIntentModel;
}
