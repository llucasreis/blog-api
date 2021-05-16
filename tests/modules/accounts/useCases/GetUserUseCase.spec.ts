import GetUserUseCase from '@modules/accounts/useCases/GetUser/GetUserUseCase';
import AppError from '@presentation/errors/AppError';
import faker from 'faker';

import MockUsersRepository from '../repositories/mocks/MockUsersRepository';

let mockUsersRepository: MockUsersRepository;
let getUser: GetUserUseCase;

describe('GetUser', () => {
  beforeEach(() => {
    mockUsersRepository = new MockUsersRepository();

    getUser = new GetUserUseCase(mockUsersRepository);
  });

  it('should be able to get a user by id', async () => {
    const user = await mockUsersRepository.create({
      displayName: 'Lucas Reis',
      email: 'lucas@gmail.com',
      password: '123456',
      image: 'https://cdn.fakercloud.com/avatars/nyancecom_128.jpg',
    });

    const response = await getUser.execute(parseInt(user.id, 10));

    expect(response.displayName).toBe('Lucas Reis');
    expect(response.email).toBe('lucas@gmail.com');
  });

  it('should not be able to get a non existing user', async () => {
    await expect(
      getUser.execute(faker.datatype.number()),
    ).rejects.toBeInstanceOf(AppError);
  });
});
