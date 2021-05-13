import User from '@modules/accounts/entities/User';

import * as CreateUserDTO from '../../useCases/CreateUser/CreateUserDTO';

export default interface UsersRepository {
  create(data: CreateUserDTO.Params): Promise<void>;
  findByEmail(email: string): Promise<User | undefined>;
}
