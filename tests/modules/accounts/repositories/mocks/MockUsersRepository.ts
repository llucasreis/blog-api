import User from '@modules/accounts/entities/User';
import UsersRepository from '@modules/accounts/repositories/contracts/UsersRepository';
import { Params } from '@modules/accounts/useCases/CreateUser/CreateUserBoundary';
import faker from 'faker';

export default class MockUsersRepository implements UsersRepository {
  private users: User[] = [];

  create({ displayName, email, password, image }: Params): Promise<User> {
    const user = new User();

    Object.assign(user, {
      id: faker.datatype.number,
      displayName,
      email,
      password,
      image,
    });

    this.users.push(user);

    return new Promise(resolve => resolve(user));
  }

  findByEmail(email: string): Promise<User | undefined> {
    const user = this.users.find(user => user.email === email);

    return new Promise(resolve => resolve(user));
  }

  findById(id: number): Promise<User | undefined> {
    const user = this.users.find(user => user.id === String(id));

    return new Promise(resolve => resolve(user));
  }

  findAll(): Promise<User[]> {
    return new Promise(resolve => resolve(this.users));
  }

  delete(id: number): Promise<void> {
    const index = this.users.findIndex(user => user.id === String(id));

    this.users = this.users.splice(index, 1);

    return new Promise(resolve => resolve());
  }
}
