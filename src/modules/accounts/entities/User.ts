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
  password: string;

  @Column()
  image: string;
}
