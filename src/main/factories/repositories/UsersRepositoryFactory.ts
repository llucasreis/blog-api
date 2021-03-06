import UsersRepository from '@modules/accounts/repositories/contracts/UsersRepository';
import TypeORMUserRepository from '@modules/accounts/repositories/typeorm/TypeORMUserRepository';

export default function UsersRepositoryFactory(): UsersRepository {
  const usersRepository = new TypeORMUserRepository();

  return usersRepository;
}
