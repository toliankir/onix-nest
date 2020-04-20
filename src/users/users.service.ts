import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IUser } from './interfaces/user.interface';
import { CreateUserDto } from './dto/createUser.dto';
import { IMongoDeleteResponse } from './interfaces/mongoDeleteResp.interface'
import { UpdateUserDto } from './dto/updateUser.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private userModel: Model<IUser>) {}

    create(createUserDto: CreateUserDto):Promise<IUser> {
        return (new this.userModel(createUserDto)).save();
    }

    getAll(): Promise<IUser[]> {
        return this.userModel.find({}, { '__v': 0 }).exec();
    }

    getById(id: string): Promise<IUser> {
        return this.userModel.findById(id, { '__v': 0 }).exec();
    }

    deleteById(_id: string): Promise<IMongoDeleteResponse> {
        return this.userModel.deleteOne({ _id }).exec();
    }

    updateById(_id: string, updatedUser: UpdateUserDto): Promise<IMongoDeleteResponse> {
        return this.userModel.updateOne({ _id }, updatedUser).exec();
    }
}
