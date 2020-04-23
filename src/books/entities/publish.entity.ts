import { Column } from 'typeorm';

export class Publish {
    @Column()
    publishers: string;
    
    @Column()
    year: number;
}
