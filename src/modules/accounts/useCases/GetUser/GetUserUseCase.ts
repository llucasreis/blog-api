import User from '@modules/accounts/entities/User';
import UsersRepository from '@modules/accounts/repositories/contracts/UsersRepository';
import AppError from 'presentation/errors/AppError';

export default class GetUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute(id: number): Promise<User> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new AppError('Usuário não existe', 404);
    }

    return user;
  }
}
