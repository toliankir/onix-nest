import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './entities/book.entity';

@Controller('books')
export class BooksController {
    constructor(private bookService: BooksService) {}

    @Get()
    async showAllBook(): Promise<Book[]> {
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
