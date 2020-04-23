import { Controller, Post, Body, HttpException, HttpStatus, Get, Param, Delete, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/createUser.dto';
import { UserIdDto } from './dto/userId.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { User } from './entities/user.entity';

@Controller('api/users')
export class UsersApiController {
    constructor(private userService: UsersService) {}

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        try {
            return await this.userService.create(createUserDto.toEntity());
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                error: error.message,
            }, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @Get(':id')
    async showById(@Param() params: UserIdDto): Promise<User> {
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
            return (await this.userService.deleteById(params.id)).result;
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
               return (await this.userService.updateById(userId.id, updateUserDto.toEntity())).result;
            } catch (error) {
                throw new HttpException({
                    status: HttpStatus.INTERNAL_SERVER_ERROR,
                    error: error.message,
                }, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

}
