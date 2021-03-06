import HashAdapter from '@adapters/HashAdapter/contracts/HashAdapter';
import TokenAdapter from '@adapters/TokenAdapter/contracts/TokenAdapter';
import UsersRepository from '@modules/accounts/repositories/contracts/UsersRepository';
import AppError from '@presentation/errors/AppError';

import { Params, Result } from './CreateUserBoundary';

export default class CreateUserUseCase {
  constructor(
    private usersRepository: UsersRepository,
    private hashAdapter: HashAdapter,
    private tokenAdapter: TokenAdapter,
  ) {}

  async execute({
    displayName,
    email,
    password,
    image,
  }: Params): Promise<Result> {
    const checkUserExists = await this.usersRepository.findByEmail(email);

    if (checkUserExists) {
      throw new AppError('Usuário já existe', 409);
    }

    const hashedPassword = await this.hashAdapter.generateHash(password);

    const user = await this.usersRepository.create({
      displayName,
      email,
      password: hashedPassword,
      image,
    });

    const token = await this.tokenAdapter.encrypt({
      id: user.id,
      email: user.email,
    });

    return { token };
  }
}
