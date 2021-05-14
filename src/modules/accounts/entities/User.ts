import { Exclude } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export default class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  displayName: string;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column()
  image: string;
}
