import { IsString, IsNumber } from 'class-validator';

export class PublishDto {
    @IsString()
    readonly publisher: string;

    @IsNumber()
    year: number;
}
