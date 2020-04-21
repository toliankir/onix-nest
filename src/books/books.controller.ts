import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { BooksService } from './books.service';
import { IBook } from './interfaces/book.interface';

@Controller('books')
export class BooksController {
    constructor(private bookService: BooksService) {}

    @Get()
    async showAllBook(): Promise<IBook[]> {
        try {
            return await this.bookService.getAll();
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                error: error.message,
            }, HttpStatus.INTERNAL_SERVER_ERROR)
        }        
    }
}
