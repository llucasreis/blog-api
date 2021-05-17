import User from '@modules/accounts/entities/User';
import CreatePostUseCase from '@modules/posts/useCases/CreatePost/CreatePostUseCase';
import MockUsersRepository from '@tests/modules/accounts/repositories/mocks/MockUsersRepository';

import MockPostsRepository from '../repositories/mocks/MockPostsRepository';

let mockPostsRepository: MockPostsRepository;
let mockUsersRepository: MockUsersRepository;
let createPost: CreatePostUseCase;
let user: User;

describe('CreatePost', () => {
  beforeEach(async () => {
    mockPostsRepository = new MockPostsRepository();
    mockUsersRepository = new MockUsersRepository();

    createPost = new CreatePostUseCase(mockPostsRepository);

    user = await mockUsersRepository.create({
      displayName: 'Lucas Reis',
      email: 'lucas@gmail.com',
      password: '123456',
      image: 'https://cdn.fakercloud.com/avatars/nyancecom_128.jpg',
    });
  });

  it('should be able to create a new post', async () => {
    const { id: userId } = user;

    const response = await createPost.execute({
      title: 'Post do Ano',
      content: 'Melhor post',
      userId,
    });

    expect(response).toHaveProperty('title');
    expect(response.title).toBe('Post do Ano');
  });
});
