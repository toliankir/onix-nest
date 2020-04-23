import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository, DeleteWriteOpResultObject, UpdateWriteOpResult } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private readonly userRepositiry: MongoRepository<User>) {}

    create(createUser: User):Promise<User> {
        return this.userRepositiry.save(createUser);
    }

    getAll(): Promise<User[]> {
        return this.userRepositiry.find({});
    }

    getById(id: string): Promise<User> {
        return this.userRepositiry.findOne(id);
    }

    async deleteById(id: string): Promise<DeleteWriteOpResultObject> {
        return this.userRepositiry.deleteOne(await this.getById(id));
    }

    async updateById(id: string, updatedUser: User): Promise<UpdateWriteOpResult> {
        const userLiteral = await this.getById(id);
        return this.userRepositiry.updateOne(userLiteral , { $set: updatedUser});
    }
}
