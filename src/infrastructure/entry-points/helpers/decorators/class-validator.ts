import { ClassValidatorAdapter } from "@/infrastructure/driven-adapters/adapters/class-valitator/class-validator-adapter";
import { AccessResource, applyDecorators } from "@tsclean/core";
// import { MinLength, MaxLength, IsEmail } from "class-validator";


export function MiddlewareValidatorInsertData() {
    console.log("Prueba desde MiddlewareValidatorInsertData");
    return applyDecorators(AccessResource(new ClassValidatorAdapter()))
}
