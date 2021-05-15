import User from '@modules/accounts/entities/User';

import * as CreateUserDTO from '../../useCases/CreateUser/CreateUserDTO';

export default interface UsersRepository {
  create(data: CreateUserDTO.Params): Promise<User>;
  findByEmail(email: string): Promise<User | undefined>;
  findById(id: number): Promise<User | undefined>;
  findAll(): Promise<User[]>;
  delete(id: number): Promise<void>;
}
