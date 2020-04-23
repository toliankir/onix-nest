import { Entity, ObjectIdColumn, Column, BaseEntity } from 'typeorm';

@Entity('users')
export class User extends BaseEntity {
    @ObjectIdColumn()
    _id: string;

    @Column()
    firstName: string;
        
    @Column()
    lastName: string;
    
    @Column()
    email: string;
        
    @Column()
    phone: string;

    @Column()
    isAdmin = false;
    
    @Column()
    verified = false;
}