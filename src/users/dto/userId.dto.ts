import { IsMongoId } from 'class-validator';

export class UserIdDto {
    @IsMongoId()
    readonly id: string;
}