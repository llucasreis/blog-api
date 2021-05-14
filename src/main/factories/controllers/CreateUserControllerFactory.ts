import UsersRepositoryFactory from '@main/factories/repositories/UsersRepositoryFactory';
import CreateUserController from '@modules/accounts/useCases/CreateUser/CreateUserController';
import CreateUserUseCase from '@modules/accounts/useCases/CreateUser/CreateUserUseCase';

import HashProviderFactory from '../providers/HashProviderFactory';

export default function CreateUserControllerFactory(): CreateUserController {
  const usersRepository = UsersRepositoryFactory();
  const hashProvider = HashProviderFactory();
  const createUserUseCase = new CreateUserUseCase(
    usersRepository,
    hashProvider,
  );
  const createUserController = new CreateUserController(createUserUseCase);

  return createUserController;
}
