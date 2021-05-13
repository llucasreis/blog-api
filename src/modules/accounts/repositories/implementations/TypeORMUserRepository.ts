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
  }: CreateUserDTO.Params): Promise<void> {
    const user = this.repository.create({
      displayName,
      email,
      password,
      image,
    });

    await this.repository.save(user);
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.repository.findOne({
      where: { email },
    });
    return user;
  }
}
