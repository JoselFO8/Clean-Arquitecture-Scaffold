import { AccessResourceInterface, ExecutionContextInterface } from "@tsclean/core";

export interface IPrueba { //Dejar en un contrato
    prueba:() => Promise<any>
}

export class ClassValidatorAdapter implements IPrueba, AccessResourceInterface {
    // Implementation
    async prueba() {
        return "Pruebas desde ClassValidatorAdapter"
    }

    accessResource(context: ExecutionContextInterface): boolean | Promise<boolean> {
        const request = context.getHttp().getRequest()
        console.log('desde ClassValidatorAdapter');
        return true
    }
}