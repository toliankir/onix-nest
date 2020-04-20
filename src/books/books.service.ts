import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IBook } from './interfaces/book.interface';
import { CreateBookDto } from './dto/createBook.dto';
import { IMongoDeleteResponse } from 'src/users/interfaces/mongoDeleteResp.interface';

@Injectable()
export class BooksService {
    constructor(@InjectModel('Book') private bookModel: Model<IBook>) {}

    getAll(): Promise<IBook[]> {
        return this.bookModel.find({}, { '__v': 0 }).exec();
    }

    getById(_id: string): Promise<IBook> {
        return this.bookModel.findOne({ _id }, { '__v': 0}).exec();
    }

    create(createBookDto: CreateBookDto): Promise<IBook> {
        return (new this.bookModel(createBookDto)).save();
    }

    deleteById(_id: string): Promise<IMongoDeleteResponse> {
        return this.bookModel.deleteOne({ _id }).exec();
    }
    
    updateById(_id: string, updatedBook: CreateBookDto): Promise<IMongoDeleteResponse> {
        return this.bookModel.updateOne({ _id }, updatedBook).exec();
    }

}
