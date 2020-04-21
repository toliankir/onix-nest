import { IsNumber, IsString, IsObject } from 'class-validator';
import { PublishDto } from './publish.dto';

export class CreateBookDto {
    @IsNumber()
    readonly blogpost: number;

    @IsString()
    readonly title: string;

    @IsString()
    readonly author: string;

    @IsObject()
    published: PublishDto;
}
