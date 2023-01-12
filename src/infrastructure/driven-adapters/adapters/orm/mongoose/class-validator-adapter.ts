import { ExecutionContextInterface } from "@tsclean/core";
import { MinLength } from "class-validator";
import { IsEmail, MaxLength, Validate } from "class-validator/types/decorator/decorators";

export class ClassValidatorAdapter {
    // Implementation
    validationRequest (context: ExecutionContextInterface): string[] | string {
        // const request = context.getHttp().getRequest()
        const { name, email } = context.getHttp().getRequest()
        const validateResult = new validatorInsertData();
        validateResult.name = name;
        validateResult.email = email;
        
        // Validate(validateResult).then(result => {
        //     console.log("desde Validate(validateResult) => ", result);
        // })
        
        console.log(validateResult);
        
        return "Prueba desde validationRequest"
    }
}

export class validatorInsertData {
    @MinLength(3)
    @MaxLength(15)
    name: string;

    @IsEmail()
    email: string
}