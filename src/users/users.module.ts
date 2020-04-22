import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserSchema } from './schemas/user.schema';
import { UsersApiController } from './users.api.controller';
import { Users } from './entities/user.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'User', schema: UserSchema}]),
    TypeOrmModule.forFeature([Users]),
  ],
  controllers: [UsersController, UsersApiController],
  providers: [UsersService]
})
export class UsersModule {}
