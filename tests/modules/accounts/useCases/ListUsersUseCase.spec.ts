import ListUsersUseCase from '@modules/accounts/useCases/ListUsers/ListUsersUseCase';

import MockUsersRepository from '../repositories/mocks/MockUsersRepository';

let mockUsersRepository: MockUsersRepository;
let listUsers: ListUsersUseCase;

describe('ListUsers', () => {
  beforeEach(() => {
    mockUsersRepository = new MockUsersRepository();

    listUsers = new ListUsersUseCase(mockUsersRepository);
  });

  it('should be able to list the users', async () => {
    const user1 = await mockUsersRepository.create({
      displayName: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
      image: 'https://cdn.fakercloud.com/avatars/nyancecom_128.jpg',
    });

    const user2 = await mockUsersRepository.create({
      displayName: 'John Trê',
      email: 'johntre@example.com',
      password: '123456',
      image: 'https://cdn.fakercloud.com/avatars/nyancecom_128.jpg',
    });

    const user3 = await mockUsersRepository.create({
      displayName: 'John Qua',
      email: 'johnqua@example.com',
      password: '123456',
      image: 'https://cdn.fakercloud.com/avatars/nyancecom_128.jpg',
    });

    const users = await listUsers.execute();

    expect(users).toEqual([user1, user2, user3]);
  });
});
