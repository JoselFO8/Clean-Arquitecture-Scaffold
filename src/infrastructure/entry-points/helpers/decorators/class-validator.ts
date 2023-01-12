import { AddUserParams } from "@/domain/models/user";
import { ClassValidatorAdapter } from "@/infrastructure/driven-adapters/adapters/orm/mongoose/class-validator-adapter";
import { AccessResource, applyDecorators } from "@tsclean/core";
import { MinLength, MaxLength, IsEmail } from "class-validator";


export function MiddlewareValidatorInsertData(data: AddUserParams) {
    // return applyDecorators(AccessResource(new ClassValidatorAdapter))
    console.log("Prueba desde MiddlewareValidatorInsertData");
    
    // return true
}

// export class validatorInsertData {
//     @MinLength (3)
//     @MaxLength(15)
//     name: string;

//     @IsEmail()
//     email: string
// }