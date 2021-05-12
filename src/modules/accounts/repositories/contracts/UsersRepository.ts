import * as CreateUserDTO from '../../useCases/CreateUser/CreateUserDTO';

export default interface UsersRepository {
  create(data: CreateUserDTO.Params): Promise<void>;
}
