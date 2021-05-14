import authConfig from '@main/config/auth';
import UsersRepository from '@modules/accounts/repositories/contracts/UsersRepository';
import { sign } from 'jsonwebtoken';
import HashProvider from 'providers/HashProvider/contracts/HashProvider';

import AppError from '@shared/errors/AppError';

import * as CreateUserDTO from './CreateUserDTO';

export default class CreateUserUseCase {
  constructor(
    private usersRepository: UsersRepository,
    private hashProvider: HashProvider,
  ) {}

  async execute({
    displayName,
    email,
    password,
    image,
  }: CreateUserDTO.Params): Promise<CreateUserDTO.Result> {
    const checkUserExists = await this.usersRepository.findByEmail(email);

    if (checkUserExists) {
      throw new AppError('Usuário já existe', 409);
    }

    const hashedPassword = await this.hashProvider.generateHash(password);

    const user = await this.usersRepository.create({
      displayName,
      email,
      password: hashedPassword,
      image,
    });

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({ id: String(user.id), email: user.email }, secret, {
      expiresIn,
    });

    return { token };
  }
}
