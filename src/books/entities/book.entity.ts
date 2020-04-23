import { Entity,  ObjectIdColumn, Column } from 'typeorm';
import { Publish } from './publish.entity';

@Entity('books')
export class Book {
    @ObjectIdColumn()
    _id: string;
    
    @Column()
    blogpost: number;

    @Column()
    title: string;
    
    @Column()
    author: string;
    
    @Column()
    published: Publish;
}
