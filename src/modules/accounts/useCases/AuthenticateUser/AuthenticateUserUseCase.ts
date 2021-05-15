import authConfig from '@main/config/auth';
import UsersRepository from '@modules/accounts/repositories/contracts/UsersRepository';
import HashAdapter from 'adapters/HashAdapter/contracts/HashAdapter';
import { sign } from 'jsonwebtoken';
import AppError from 'presentation/errors/AppError';

import { Result } from '../CreateUser/CreateUserDTO';
import { Params } from './AuthenticateUserDTO';

export default class AuthenticateUserUseCase {
  constructor(
    private usersRepository: UsersRepository,
    private hashAdapter: HashAdapter,
  ) {}

  async execute({ email, password }: Params): Promise<Result> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Campos inválidos');
    }

    const passwordMatched = this.hashAdapter.compareHash(
      password,
      user.password,
    );

    if (!passwordMatched) throw new AppError('Campos inválidos');

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({ id: user.id, email: user.email }, secret, {
      expiresIn,
    });

    return { token };
  }
}
