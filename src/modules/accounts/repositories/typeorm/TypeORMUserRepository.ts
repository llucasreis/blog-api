import User from '@modules/accounts/entities/User';
import { getRepository, Repository } from 'typeorm';

import * as CreateUserDTO from '../../useCases/CreateUser/CreateUserDTO';
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
  }: CreateUserDTO.Params): Promise<User> {
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

  async findById(id: string): Promise<User | undefined> {
    const user = await this.repository.findOne(id);

    return user;
  }

  async findAll(): Promise<User[]> {
    const users = await this.repository.find();
    console.log(users);
    return users;
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
