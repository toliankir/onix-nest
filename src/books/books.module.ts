import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BookSchema } from './schemas/book.schema';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { BooksApiController } from './books.api.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Book', schema: BookSchema}]),
    TypeOrmModule.forFeature([Book]),
  ],
  controllers: [BooksController, BooksApiController],
  providers: [BooksService]
})
export class BooksModule {}
