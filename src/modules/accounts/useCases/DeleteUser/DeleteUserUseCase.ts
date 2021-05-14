import UsersRepository from '@modules/accounts/repositories/contracts/UsersRepository';

export default class DeleteUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
