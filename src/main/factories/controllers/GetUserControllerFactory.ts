import GetUserController from '@modules/accounts/useCases/GetUser/GetUserController';
import GetUserUseCase from '@modules/accounts/useCases/GetUser/GetUserUseCase';

import UsersRepositoryFactory from '../repositories/UsersRepositoryFactory';

export default function GetUserControllerFactory(): GetUserController {
  const usersRepository = UsersRepositoryFactory();
  const getUserUseCase = new GetUserUseCase(usersRepository);
  const getUserController = new GetUserController(getUserUseCase);

  return getUserController;
}
