import { IsMongoId } from 'class-validator';

export class BookIdDto {
    @IsMongoId()
    readonly id: string;
}