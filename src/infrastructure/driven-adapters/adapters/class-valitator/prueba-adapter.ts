import { AccessResourceInterface, ExecutionContextInterface } from "@tsclean/core";

export interface IPrueba {
    prueba:() => Promise<any>
}

export class PruebaAdapter implements IPrueba, AccessResourceInterface {
    // Implementation
    async prueba() {
        return "Pruebas desde PruebaAdapter"
    }

    accessResource(context: ExecutionContextInterface): boolean | Promise<boolean> {
        const request = context.getHttp().getRequest()
        console.log('desde PruebaAdapter');
        
        return true
    }

}