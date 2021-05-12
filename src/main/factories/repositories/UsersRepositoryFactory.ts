import UsersRepository from '@modules/accounts/repositories/contracts/UsersRepository';
import TypeORMUserRepository from '@modules/accounts/repositories/implementations/TypeORMUserRepository';

export default function UsersRepositoryFactory(): UsersRepository {
  const usersRepository = new TypeORMUserRepository();

  return usersRepository;
}
