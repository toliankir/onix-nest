import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IBook } from './interfaces/book.interface';
import { CreateUpdateBookDto } from './dto/createUpdateBook.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {
    constructor(@InjectModel('Book') private bookModel: Model<IBook>,
    @InjectRepository(Book) private readonly userRepositiry: MongoRepository<Book>) {}

    getAll(): Promise<IBook[]> {
        return this.bookModel.find({}, { '__v': 0 }).exec();
    }

    getById(_id: string): Promise<IBook> {
        return this.bookModel.findOne({ _id }, { '__v': 0}).exec();
    }

    create(createBook: Book): Promise<Book> {
        return this.userRepositiry.save(createBook);
    }

    deleteById(_id: string): Promise<any> {
        return this.bookModel.deleteOne({ _id }).exec();
    }
    
    updateById(_id: string, updatedBook: CreateUpdateBookDto): Promise<any> {
        return this.bookModel.updateOne({ _id }, updatedBook).exec();
    }

}
