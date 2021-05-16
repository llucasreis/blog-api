import HashAdapterFactory from '@main/factories/adapters/HashAdapterFactory';
import TokenAdapterFactory from '@main/factories/adapters/TokenAdapterFactory';
import UsersRepositoryFactory from '@main/factories/repositories/UsersRepositoryFactory';

import AuthenticateUserController from './AuthenticateUserController';
import AuthenticateUserUseCase from './AuthenticateUserUseCase';

export default function AuthenticateUserControllerFactory(): AuthenticateUserController {
  const usersRepository = UsersRepositoryFactory();
  const hashAdapter = HashAdapterFactory();
  const tokenAdapter = TokenAdapterFactory();

  const authenticateUserUseCase = new AuthenticateUserUseCase(
    usersRepository,
    hashAdapter,
    tokenAdapter,
  );
  const authenticateUserController = new AuthenticateUserController(
    authenticateUserUseCase,
  );

  return authenticateUserController;
}
