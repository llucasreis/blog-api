import User from '@modules/accounts/entities/User';
import { getRepository, Repository } from 'typeorm';

import * as CreateUserBoundary from '../../useCases/CreateUser/CreateUserBoundary';
import UsersRepository from '../contracts/UsersRepository';

export default class TypeORMUserRepository implements UsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    displayName,
    email,
    password,
    image,
  }: CreateUserBoundary.Params): Promise<User> {
    const user = this.repository.create({
      displayName,
      email,
      password,
      image,
    });

    return this.repository.save(user);
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.repository.findOne({
      where: { email },
    });
    return user;
  }

  async findById(id: number): Promise<User | undefined> {
    const user = await this.repository.findOne(id);

    return user;
  }

  async findAll(): Promise<User[]> {
    const users = await this.repository.find();
    console.log(users);
    return users;
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
