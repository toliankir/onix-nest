import { IsString, IsEmail, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';
import { User } from '../entities/user.entity';

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

    toEntity(): User {
        const newUser: User = new User();
        Object.keys(this).forEach(key => {
            newUser[key] = this[key];
        });
        return newUser;
    }
}
