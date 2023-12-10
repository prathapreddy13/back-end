import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Users{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    firstName: string;

    @Column({ length: 100 })
    lastName: string;

    @Column()
    email: string;

    @Column()
    password: string;
}