import DeleteUserUseCase from '@modules/accounts/useCases/DeleteUser/DeleteUserUseCase';

import MockUsersRepository from '../repositories/mocks/MockUsersRepository';

let mockUsersRepository: MockUsersRepository;
let deleteUser: DeleteUserUseCase;

describe('DeleteUser', () => {
  beforeEach(() => {
    mockUsersRepository = new MockUsersRepository();

    deleteUser = new DeleteUserUseCase(mockUsersRepository);
  });

  it('should be able to delete a user', async () => {
    const user = await mockUsersRepository.create({
      displayName: 'Lucas Reis',
      email: 'lucas@gmail.com',
      password: '123456',
      image: 'https://cdn.fakercloud.com/avatars/nyancecom_128.jpg',
    });

    await deleteUser.execute(user.id);

    const users = await mockUsersRepository.findAll();

    expect(users).toEqual([]);
  });
});
