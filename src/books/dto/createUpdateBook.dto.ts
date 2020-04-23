import { IsNumber, IsString, IsObject, ValidateNested } from 'class-validator';
import { PublishDto } from './publish.dto';
import { Book } from '../entities/book.entity';
import { Type } from 'class-transformer';

export class CreateUpdateBookDto {
    @IsNumber()
    readonly blogpost: number;

    @IsString()
    readonly title: string;

    @IsString()
    readonly author: string;

    // @IsObject()
    @ValidateNested()
    @Type(() => PublishDto)
    published: PublishDto;
        
    toEntity(): Book {
        const newBook: Book = new Book();
        Object.keys(this).forEach(key => {
            newBook[key] = this[key];
        });
        return newBook;
    }
}
