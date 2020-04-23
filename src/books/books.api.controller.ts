import { Controller, Get, Param, HttpException, HttpStatus, Delete, Put, Body, Post } from '@nestjs/common';
import { BookIdDto } from './dto/bookId.dto';
import { CreateUpdateBookDto } from './dto/createUpdateBook.dto';
import { BooksService } from './books.service';
import { Book } from './entities/book.entity';

@Controller('api/books')
export class BooksApiController {
    constructor(private bookService: BooksService) {}
    
    @Get(':id')
    async showById(@Param() bookIdDto: BookIdDto): Promise<Book> {
        try {
            return await this.bookService.getById(bookIdDto.id);
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                error: error.message,
            }, HttpStatus.INTERNAL_SERVER_ERROR)
        }        
    }

    @Delete(':id')
    async deleteById(@Param() bookIdDto: BookIdDto): Promise<any> {
        try {
            return await this.bookService.deleteById(bookIdDto.id);
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                error: error.message,
            }, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @Put()
    async updateById(@Body() updatedBook: CreateUpdateBookDto, @Body() bookId: BookIdDto) {
        try {
            return await this.bookService.updateById(bookId.id, updatedBook);
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                error: error.message,
            }, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @Post() 
    async createBook(@Body() createBookDto: CreateUpdateBookDto): Promise<Book> {
        try {
            return await this.bookService.create(createBookDto.toEntity());
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                error: error.message,
            }, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }    
}
