import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.MONGODB_URI,
      entities: [join(__dirname, '**/**.entity{.ts,.js}')],
      synchronize: true,
      useNewUrlParser: true,
      logging: true,
      useUnifiedTopology: true
    }),
    UsersModule,
    BooksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
