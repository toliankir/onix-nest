import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IUser } from './interfaces/user.interface';
import { CreateUserDto } from './dto/createUser.dto';
import { IMongoDeleteResponse } from './interfaces/mongoDeleteResp.interface'
import { UpdateUserDto } from './dto/updateUser.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository, DeleteWriteOpResultObject, UpdateWriteOpResult } from 'typeorm';
import { Users } from './entities/user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel('User') private userModel: Model<IUser>,
        @InjectRepository(Users) private readonly userRepositiry: MongoRepository<Users>) {}

    create(createUser: Users):Promise<Users> {
        return this.userRepositiry.save(createUser);
        // return (new this.userModel(createUserDto)).save();
    }

    getAll(): Promise<Users[]> {
        return this.userRepositiry.find({});
        // return this.userModel.find({}, { '__v': 0 }).exec();
    }

    getById(_id: string): Promise<Users> {
        return this.userRepositiry.findOne( _id );
    }

    async deleteById(_id: string): Promise<DeleteWriteOpResultObject> {
        return this.userRepositiry.deleteOne(await this.getById(_id));
        // return this.userModel.deleteOne({ _id }).exec();
    }

    async updateById(_id: string, updatedUser: Users): Promise<UpdateWriteOpResult> {
        // delete updatedUser._id;
        const obj = await this.getById(_id);
        console.log(obj);
        // obj.firstName = 'aaa bbb test';
        // obj = updatedUser;
        // obj.save();
        return this.userRepositiry.updateOne( obj , { $set: updatedUser});
        // return this.userModel.updateOne({ _id }, {}).exec();
    }
}
