import authConfig from '@main/config/auth';
import UsersRepository from '@modules/accounts/repositories/contracts/UsersRepository';
import { sign } from 'jsonwebtoken';
import HashProvider from 'providers/HashProvider/contracts/HashProvider';

import AppError from '@shared/errors/AppError';

import { Result } from '../CreateUser/CreateUserDTO';
import { Params } from './AuthenticateUserDTO';

export default class AuthenticateUserUseCase {
  constructor(
    private usersRepository: UsersRepository,
    private hashProvider: HashProvider,
  ) {}

  async execute({ email, password }: Params): Promise<Result> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Campos inválidos');
    }

    const passwordMatched = this.hashProvider.compareHash(
      password,
      user.password,
    );

    if (!passwordMatched) throw new AppError('Campos inválidos');

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({ id: String(user.id), email: user.email }, secret, {
      expiresIn,
    });

    return { token };
  }
}
