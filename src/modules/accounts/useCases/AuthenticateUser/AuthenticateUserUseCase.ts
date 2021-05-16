import UsersRepository from '@modules/accounts/repositories/contracts/UsersRepository';
import HashAdapter from 'adapters/HashAdapter/contracts/HashAdapter';
import TokenAdapter from 'adapters/TokenAdapter/contracts/TokenAdapter';
import AppError from 'presentation/errors/AppError';

import { Params, Result } from './AuthenticateUserBoundary';

export default class AuthenticateUserUseCase {
  constructor(
    private usersRepository: UsersRepository,
    private hashAdapter: HashAdapter,
    private tokenAdapter: TokenAdapter,
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

    const token = await this.tokenAdapter.encrypt({
      id: user.id,
      email: user.email,
    });

    return { token };
  }
}
