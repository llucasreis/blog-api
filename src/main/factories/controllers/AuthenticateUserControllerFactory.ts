import AuthenticateUserController from '@modules/accounts/useCases/AuthenticateUser/AuthenticateUserController';
import AuthenticateUserUseCase from '@modules/accounts/useCases/AuthenticateUser/AuthenticateUserUseCase';

import HashProviderFactory from '../providers/HashProviderFactory';
import UsersRepositoryFactory from '../repositories/UsersRepositoryFactory';

export default function AuthenticateUserControllerFactory(): AuthenticateUserController {
  const usersRepository = UsersRepositoryFactory();
  const hashProvider = HashProviderFactory();

  const authenticateUserUseCase = new AuthenticateUserUseCase(
    usersRepository,
    hashProvider,
  );
  const authenticateUserController = new AuthenticateUserController(
    authenticateUserUseCase,
  );

  return authenticateUserController;
}
