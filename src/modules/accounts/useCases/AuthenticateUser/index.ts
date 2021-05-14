import HashAdapterFactory from '@main/factories/adapters/HashAdapterFactory';
import UsersRepositoryFactory from '@main/factories/repositories/UsersRepositoryFactory';

import AuthenticateUserController from './AuthenticateUserController';
import AuthenticateUserUseCase from './AuthenticateUserUseCase';

export default function AuthenticateUserControllerFactory(): AuthenticateUserController {
  const usersRepository = UsersRepositoryFactory();
  const hashAdapter = HashAdapterFactory();

  const authenticateUserUseCase = new AuthenticateUserUseCase(
    usersRepository,
    hashAdapter,
  );
  const authenticateUserController = new AuthenticateUserController(
    authenticateUserUseCase,
  );

  return authenticateUserController;
}
