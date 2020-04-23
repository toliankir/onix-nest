import { IsString, IsNumber } from 'class-validator';
import { Publish } from '../entities/publish.entity';

export class PublishDto {
    @IsString()
    readonly publisher: string;

    @IsNumber()
    readonly year: number;
}
