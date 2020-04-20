import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/createBook.dto';
import { IBook } from './interfaces/book.interface';
import { BookIdDto } from './dto/bookId.dto';
import { IMongoDeleteResponse } from 'src/users/interfaces/mongoDeleteResp.interface';

@Controller('api/books')
export class BooksController {
    
    constructor(private bookService: BooksService) {}

    @Get()
    async showAllBook(): Promise<IBook[]> {
        return await this.bookService.getAll();
    }
    
    @Get(':id')
    async showById(@Param() bookIdDto: BookIdDto): Promise<IBook> {
        return await this.bookService.getById(bookIdDto.id);
    }

    @Delete(':id')
    async deleteById(@Param() bookIdDto: BookIdDto): Promise<IMongoDeleteResponse> {
        return await this.bookService.deleteById(bookIdDto.id);
    }

    @Put()
    async updateById(@Body() updatedBook: CreateBookDto, @Body() bookId: BookIdDto) {
        return await this.bookService.updateById(bookId.id, updatedBook);
    }

    @Post() 
    async createBook(@Body() createBookDto: CreateBookDto): Promise<IBook> {
        return await this.bookService.create(createBookDto);
    }
}
