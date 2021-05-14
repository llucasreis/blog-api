import UsersRepositoryFactory from '@main/factories/repositories/UsersRepositoryFactory';

import ListUsersController from './ListUsersController';
import ListUsersUseCase from './ListUsersUseCase';

export default function ListUsersControllerFactory(): ListUsersController {
  const usersRepository = UsersRepositoryFactory();
  const listUsersUseCase = new ListUsersUseCase(usersRepository);
  const listUsersController = new ListUsersController(listUsersUseCase);

  return listUsersController;
}
