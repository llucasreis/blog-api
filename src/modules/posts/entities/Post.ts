import User from '@modules/accounts/entities/User';
import { Exclude } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('posts')
export default class Post {
  @PrimaryGeneratedColumn()
  @Exclude()
  id: string;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  userId: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user: User;

  @CreateDateColumn()
  @Exclude()
  published: Date;

  @UpdateDateColumn()
  @Exclude()
  updated: Date;
}
