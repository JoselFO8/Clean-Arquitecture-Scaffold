import { AddUserParams, UserModel } from "@/domain/models/user";
import { ADD_USER_SERVICE, IAddUserService } from "@/domain/use-cases/add-user-service";
import { GET_USER_SERVICE, IGetUserService } from "@/domain/use-cases/get-user-service";
import { GET_USERS_SERVICE ,IGetUsersService } from "@/domain/use-cases/get-users-service";
import { IUpdateUserService, UPDATE_USER_SERVICE } from "@/domain/use-cases/update-user-service";
import {Mapping, Get, Adapter, Post, Body, Param, Put} from "@tsclean/core";

@Mapping('api/v1/add-user')
export class AddUserController {

    constructor(
        @Adapter(ADD_USER_SERVICE) private readonly addUserService: IAddUserService,
        @Adapter(GET_USERS_SERVICE) private readonly getUsersService: IGetUsersService,
        @Adapter(GET_USER_SERVICE) private readonly getUserService: IGetUserService,
        @Adapter(UPDATE_USER_SERVICE) private readonly updateUserService: IUpdateUserService,
    ) {}
    
    // Example function
    @Get()
    async getUsersController() {
        console.log("getUsersController");
        
        return await this.getUsersService.getUsersService();
    } 

    // @Get("/:id")
    // async getUserController(@Param() id: AddUserParams): Promise<UserModel> {
    //     console.log("getUserController");
    //     return await this.getUserService.getUserService(id);
    // } 

    @Get("/:id")
    async getUserController(@Param() id: {id: string}): Promise<UserModel> {
        return await this.getUserService.getUserService(id.id);
    } 

    @Post()
    async addUserController(@Body() data: AddUserParams): Promise<UserModel> {
        return await this.addUserService.addUserService(data);
    }

    @Put("/:id")
    async updateUserController(@Param() id: {id: string}, @Body() data: AddUserParams): Promise<UserModel> {
        return await this.updateUserService.updateUserService(id.id, data)
    }
}
// Prueba
