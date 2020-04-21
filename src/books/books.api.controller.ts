import { Controller, Get, Param, HttpException, HttpStatus, Delete, Put, Body, Post } from '@nestjs/common';
import { BookIdDto } from './dto/bookId.dto';
import { IBook } from './interfaces/book.interface';
import { IMongoDeleteResponse } from 'src/users/interfaces/mongoDeleteResp.interface';
import { CreateBookDto } from './dto/createBook.dto';
import { BooksService } from './books.service';

@Controller('api/books')
export class BooksApiController {
    constructor(private bookService: BooksService) {}
    
    @Get(':id')
    async showById(@Param() bookIdDto: BookIdDto): Promise<IBook> {
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
    async deleteById(@Param() bookIdDto: BookIdDto): Promise<IMongoDeleteResponse> {
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
    async updateById(@Body() updatedBook: CreateBookDto, @Body() bookId: BookIdDto) {
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
    async createBook(@Body() createBookDto: CreateBookDto): Promise<IBook> {
        try {
            return await this.bookService.create(createBookDto);
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                error: error.message,
            }, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }    
}
