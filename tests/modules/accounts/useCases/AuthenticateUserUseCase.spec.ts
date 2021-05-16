import AuthenticateUserUseCase from '@modules/accounts/useCases/AuthenticateUser/AuthenticateUserUseCase';
import AppError from '@presentation/errors/AppError';
import MockHashAdapter from '@tests/adapters/mocks/MockHashAdapter';
import MockTokenAdapter from '@tests/adapters/mocks/MockTokenAdapter';

import MockUsersRepository from '../repositories/mocks/MockUsersRepository';

let mockUsersRepository: MockUsersRepository;
let mockHashAdapter: MockHashAdapter;
let mockTokenAdapter: MockTokenAdapter;
let authenticateUser: AuthenticateUserUseCase;

describe('AuthenticateUser', () => {
  beforeEach(() => {
    mockUsersRepository = new MockUsersRepository();
    mockHashAdapter = new MockHashAdapter();
    mockTokenAdapter = new MockTokenAdapter();

    authenticateUser = new AuthenticateUserUseCase(
      mockUsersRepository,
      mockHashAdapter,
      mockTokenAdapter,
    );
  });

  it('should be authenticate user', async () => {
    await mockUsersRepository.create({
      displayName: 'Lucas Reis',
      email: 'lucas@gmail.com',
      password: '123456',
      image: 'https://cdn.fakercloud.com/avatars/nyancecom_128.jpg',
    });

    const response = await authenticateUser.execute({
      email: 'lucas@gmail.com',
      password: '123456',
    });

    expect(response).toHaveProperty('token');
  });

  it('should not be able to authenticate user with invalid fields', async () => {
    await mockUsersRepository.create({
      displayName: 'Lucas Reis',
      email: 'lucas@gmail.com',
      password: '123456',
      image: 'https://cdn.fakercloud.com/avatars/nyancecom_128.jpg',
    });

    await expect(
      authenticateUser.execute({
        email: 'lucas@gmail.com',
        password: '12345',
      }),
    ).rejects.toBeInstanceOf(AppError);

    await expect(
      authenticateUser.execute({
        email: 'l@gmail.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
