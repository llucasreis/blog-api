import DeleteUserController from '@modules/accounts/useCases/DeleteUser/DeleteUserController';
import DeleteUserUseCase from '@modules/accounts/useCases/DeleteUser/DeleteUserUseCase';

import UsersRepositoryFactory from '../repositories/UsersRepositoryFactory';

export default function DeleteUserControllerFactory(): DeleteUserController {
  const usersRepository = UsersRepositoryFactory();
  const deleteUserUseCase = new DeleteUserUseCase(usersRepository);
  const deleteUserController = new DeleteUserController(deleteUserUseCase);

  return deleteUserController;
}
