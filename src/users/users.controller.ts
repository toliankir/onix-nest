import { Controller, Get, Body, Param, Delete, Post, HttpException, HttpStatus, Put, ParseBoolPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserIdDto } from './dto/userId.dto';
import { CreateUserDto } from './dto/createUser.dto';
import { IUser } from './interfaces/user.interface';
import { UpdateUserDto } from './dto/updateUser.dto';

@Controller('api/users')
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

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        try {
            return await this.userService.create(createUserDto);
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                error: error.message,
            }, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @Get(':id')
    async showById(@Param() params: UserIdDto): Promise<IUser> {
        try {
            return await this.userService.getById(params.id);
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                error: error.message,
            }, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @Delete(':id')
    async deleteById(@Param() params: UserIdDto) {
        try {
            return await this.userService.deleteById(params.id);
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                error: error.message,
            }, HttpStatus.INTERNAL_SERVER_ERROR)
        }        
    }

    @Put()
    async updateUserById(@Body() updateUserDto: UpdateUserDto,
        @Body() userId: UserIdDto) {
            try {
               return await this.userService.updateById(userId.id, updateUserDto);
            } catch (error) {
                throw new HttpException({
                    status: HttpStatus.INTERNAL_SERVER_ERROR,
                    error: error.message,
                }, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
}
