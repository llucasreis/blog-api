import ListUsersController from '@modules/accounts/useCases/ListUsers/ListUsersController';
import ListUsersUseCase from '@modules/accounts/useCases/ListUsers/ListUsersUseCase';

import UsersRepositoryFactory from '../repositories/UsersRepositoryFactory';

export default function ListUsersControllerFactory(): ListUsersController {
  const usersRepository = UsersRepositoryFactory();
  const listUsersUseCase = new ListUsersUseCase(usersRepository);
  const listUsersController = new ListUsersController(listUsersUseCase);

  return listUsersController;
}
