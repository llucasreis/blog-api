import User from '@modules/accounts/entities/User';
import UsersRepository from '@modules/accounts/repositories/contracts/UsersRepository';

export default class ListUsersUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute(): Promise<User[]> {
    const users = await this.usersRepository.findAll();

    return users;
  }
}
