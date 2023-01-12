import { AddUserParams, UserModel } from "@/domain/models/user";
import { GET_USER_SERVICE, IGetUserService } from "@/domain/use-cases/get-user-service";
import {Mapping, Get, Param, Adapter} from "@tsclean/core";

@Mapping('api/v1/get-user')
export class GetUserController {

    constructor(
        @Adapter(GET_USER_SERVICE) private readonly getUserService: IGetUserService,
    ) {}
    
    // Example function
    // @Get()
    // async getUserController(@Param() id: AddUserParams): Promise<UserModel> {
    //     return await this.getUserService.getUserService(id);
    // } 
}
