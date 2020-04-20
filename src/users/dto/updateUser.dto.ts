import { IsString, IsEmail, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';

export class UpdateUserDto {
    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsEmail()
    email: string;

    @IsString()
    phone: string;

    @IsOptional()
    @Transform((val: string) => val === 'true')
    isAdmin: boolean;
    
    @IsOptional()
    @Transform((val: string) => val === 'true')
    verified: boolean;
}
