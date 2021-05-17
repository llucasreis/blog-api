import User from '@modules/accounts/entities/User';
import GetPostUseCase from '@modules/posts/useCases/GetPost/GetPostUseCase';
import AppError from '@presentation/errors/AppError';
import MockUsersRepository from '@tests/modules/accounts/repositories/mocks/MockUsersRepository';
import faker from 'faker';

import MockPostsRepository from '../repositories/mocks/MockPostsRepository';

let mockPostsRepository: MockPostsRepository;
let mockUsersRepository: MockUsersRepository;
let getPost: GetPostUseCase;
let user: User;

describe('GetPost', () => {
  beforeEach(async () => {
    mockPostsRepository = new MockPostsRepository();
    mockUsersRepository = new MockUsersRepository();

    getPost = new GetPostUseCase(mockPostsRepository);

    user = await mockUsersRepository.create({
      displayName: 'Lucas Reis',
      email: 'lucas@gmail.com',
      password: '123456',
      image: 'https://cdn.fakercloud.com/avatars/nyancecom_128.jpg',
    });
  });

  it('should be able to get a post by id', async () => {
    const { id: userId } = user;

    const post = await mockPostsRepository.create({
      title: 'Post do Ano',
      content: 'Melhor post',
      userId,
    });

    const response = await getPost.execute(post.id);

    expect(response.title).toBe('Post do Ano');
    expect(response.userId).toBe(userId);
  });

  it('should not be able to get a non existing post', async () => {
    await expect(
      getPost.execute(faker.datatype.number()),
    ).rejects.toBeInstanceOf(AppError);
  });
});
