import { IsNumber, IsString, IsObject } from 'class-validator';
import { PublishDto } from './publish.dto';
import { Book } from '../entities/book.entity';

export class CreateUpdateBookDto {
    @IsNumber()
    readonly blogpost: number;

    @IsString()
    readonly title: string;

    @IsString()
    readonly author: string;

    @IsObject()
    published: PublishDto;
        
    toEntity(): Book {
        const newBook: Book = new Book();
        Object.keys(this).forEach(key => {
            newBook[key] = this[key];
        });
        return newBook;
    }
}
