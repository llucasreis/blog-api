import UsersRepositoryFactory from '@main/factories/repositories/UsersRepositoryFactory';

import DeleteUserController from './DeleteUserController';
import DeleteUserUseCase from './DeleteUserUseCase';

export default function DeleteUserControllerFactory(): DeleteUserController {
  const usersRepository = UsersRepositoryFactory();
  const deleteUserUseCase = new DeleteUserUseCase(usersRepository);
  const deleteUserController = new DeleteUserController(deleteUserUseCase);

  return deleteUserController;
}
