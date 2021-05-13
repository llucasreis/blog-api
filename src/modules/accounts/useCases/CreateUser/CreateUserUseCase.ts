import UsersRepository from '@modules/accounts/repositories/contracts/UsersRepository';

import AppError from '@shared/errors/AppError';

import * as CreateUserDTO from './CreateUserDTO';

export default class CreateUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute(data: CreateUserDTO.Params): Promise<void> {
    const checkUserExists = await this.usersRepository.findByEmail(data.email);

    if (checkUserExists) {
      throw new AppError('Usuário já existe');
    }

    await this.usersRepository.create(data);
  }
}
