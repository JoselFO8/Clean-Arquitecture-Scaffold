import { PruebaAdapter } from "@/infrastructure/driven-adapters/adapters/class-valitator/prueba-adapter";
import { AccessResource, applyDecorators } from "@tsclean/core";

export function MiddlewareDePrueba() {
    // return applyDecorators(AccessResource(new ClassValidatorAdapter))
    console.log("Prueba desde MiddlewareValidatorInsertData");
    
    return applyDecorators(AccessResource(new PruebaAdapter()))
}
