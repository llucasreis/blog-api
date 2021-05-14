import HashAdapterFactory from '@main/factories/adapters/HashAdapterFactory';
import UsersRepositoryFactory from '@main/factories/repositories/UsersRepositoryFactory';

import CreateUserController from './CreateUserController';
import CreateUserUseCase from './CreateUserUseCase';

export default function CreateUserControllerFactory(): CreateUserController {
  const usersRepository = UsersRepositoryFactory();
  const hashAdapter = HashAdapterFactory();
  const createUserUseCase = new CreateUserUseCase(usersRepository, hashAdapter);
  const createUserController = new CreateUserController(createUserUseCase);

  return createUserController;
}
