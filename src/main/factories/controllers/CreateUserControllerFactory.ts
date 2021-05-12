import CreateUserController from '@modules/accounts/useCases/CreateUser/CreateUserController';
import CreateUserUseCase from '@modules/accounts/useCases/CreateUser/CreateUserUseCase';
import UsersRepositoryFactory from 'main/factories/repositories/UsersRepositoryFactory';

export default function CreateUserControllerFactory(): CreateUserController {
  const usersRepository = UsersRepositoryFactory();
  const createUserUseCase = new CreateUserUseCase(usersRepository);
  const createUserController = new CreateUserController(createUserUseCase);

  return createUserController;
}
