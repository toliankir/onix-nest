import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { IUser } from './interfaces/user.interface';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

    @Get()
    async showAll(): Promise<IUser[]> {
        try {
            return await this.userService.getAll();
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                error: error.message,
            }, HttpStatus.INTERNAL_SERVER_ERROR)
        }        
    }   
}
