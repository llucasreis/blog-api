import UsersRepository from '@modules/accounts/repositories/contracts/UsersRepository';

import * as CreateUserDTO from './CreateUserDTO';

export default class CreateUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute(data: CreateUserDTO.Params): Promise<void> {
    await this.usersRepository.create(data);
  }
}
