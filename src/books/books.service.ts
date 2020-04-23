import { Injectable } from '@nestjs/common';
import { CreateUpdateBookDto } from './dto/createUpdateBook.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository, DeleteWriteOpResultObject, UpdateWriteOpResult } from 'typeorm';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {
    constructor(@InjectRepository(Book) private readonly bookRepositiry: MongoRepository<Book>) {}

    getAll(): Promise<Book[]> {
        return this.bookRepositiry.find({});
    }

    getById(id: string): Promise<Book> {
        return this.bookRepositiry.findOne(id);
    }

    create(createBook: Book): Promise<Book> {
        return this.bookRepositiry.save(createBook);
    }

    async deleteById(id: string): Promise<DeleteWriteOpResultObject> {
        return this.bookRepositiry.deleteOne(await this.getById(id));
    }
    
    async updateById(id: string, updatedBook: CreateUpdateBookDto): Promise<UpdateWriteOpResult> {
        return this.bookRepositiry.updateOne(await this.getById(id) , { $set: updatedBook});
    }
}
