import { Entity, ObjectIdColumn, Column, BaseEntity } from 'typeorm';
import { IsString, IsOptional, IsEmail, IsBoolean } from 'class-validator';
import { Transform } from 'class-transformer';

@Entity()
export class Users extends BaseEntity {
    @ObjectIdColumn()
    @IsOptional()
    _id: string;

    @Column()
    @IsString()
    firstName: string;
        
    @Column()
    @IsString()
    lastName: string;
    
    @Column()
    @IsEmail()
    email: string;
        
    @Column()
    @IsString()
    phone: string;

    // @IsOptional()
    @Transform((val: string) => val === 'true')
    @IsBoolean()
    @Column()
    isAdmin: boolean = false;
    
    // @IsOptional()
    @Transform((val: string) => val === 'true')
    @IsBoolean()
    @Column()
    verified: boolean = false;
}