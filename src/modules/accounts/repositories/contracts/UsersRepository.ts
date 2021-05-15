import User from '@modules/accounts/entities/User';

import * as CreateUserBoundary from '../../useCases/CreateUser/CreateUserBoundary';

export default interface UsersRepository {
  create(data: CreateUserBoundary.Params): Promise<User>;
  findByEmail(email: string): Promise<User | undefined>;
  findById(id: number): Promise<User | undefined>;
  findAll(): Promise<User[]>;
  delete(id: number): Promise<void>;
}
