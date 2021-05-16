import HashAdapterFactory from '@main/factories/adapters/HashAdapterFactory';
import TokenAdapterFactory from '@main/factories/adapters/TokenAdapterFactory';
import UsersRepositoryFactory from '@main/factories/repositories/UsersRepositoryFactory';

import CreateUserController from './CreateUserController';
import CreateUserUseCase from './CreateUserUseCase';

export default function CreateUserControllerFactory(): CreateUserController {
  const usersRepository = UsersRepositoryFactory();
  const hashAdapter = HashAdapterFactory();
  const tokenAdapter = TokenAdapterFactory();

  const createUserUseCase = new CreateUserUseCase(
    usersRepository,
    hashAdapter,
    tokenAdapter,
  );
  const createUserController = new CreateUserController(createUserUseCase);

  return createUserController;
}
