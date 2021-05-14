import UsersRepositoryFactory from '@main/factories/repositories/UsersRepositoryFactory';

import GetUserController from './GetUserController';
import GetUserUseCase from './GetUserUseCase';

export default function GetUserControllerFactory(): GetUserController {
  const usersRepository = UsersRepositoryFactory();
  const getUserUseCase = new GetUserUseCase(usersRepository);
  const getUserController = new GetUserController(getUserUseCase);

  return getUserController;
}
