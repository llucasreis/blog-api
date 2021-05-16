import * as CreateUserBoundary from '@modules/accounts/useCases/CreateUser/CreateUserBoundary';
import CreateUserUseCase from '@modules/accounts/useCases/CreateUser/CreateUserUseCase';
import AppError from '@presentation/errors/AppError';

import MockHashAdapter from '../../../adapters/mocks/MockHashAdapter';
import MockTokenAdapter from '../../../adapters/mocks/MockTokenAdapter';
import MockUsersRepository from '../repositories/mocks/MockUsersRepository';

let mockUsersRepository: MockUsersRepository;
let mockHashAdapter: MockHashAdapter;
let mockTokenAdapter: MockTokenAdapter;
let createUser: CreateUserUseCase;
let params: CreateUserBoundary.Params;

describe('CreateUser', () => {
  beforeEach(() => {
    mockUsersRepository = new MockUsersRepository();
    mockHashAdapter = new MockHashAdapter();
    mockTokenAdapter = new MockTokenAdapter();

    createUser = new CreateUserUseCase(
      mockUsersRepository,
      mockHashAdapter,
      mockTokenAdapter,
    );

    params = {
      displayName: 'Lucas Reis',
      email: 'lucas@gmail.com',
      password: '123456',
      image: 'https://cdn.fakercloud.com/avatars/nyancecom_128.jpg',
    };
  });

  it('should be able to create a new user', async () => {
    const response = await createUser.execute(params);

    expect(response).toHaveProperty('token');
  });

  it('should not be able to create a new user with same email from another', async () => {
    await createUser.execute(params);

    await expect(createUser.execute(params)).rejects.toBeInstanceOf(AppError);
  });
});
