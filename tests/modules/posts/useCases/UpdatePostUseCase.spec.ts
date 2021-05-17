import User from '@modules/accounts/entities/User';
import UpdatePostUseCase from '@modules/posts/useCases/UpdatePost/UpdatePostUseCase';
import AppError from '@presentation/errors/AppError';
import MockUsersRepository from '@tests/modules/accounts/repositories/mocks/MockUsersRepository';
import faker from 'faker';

import MockPostsRepository from '../repositories/mocks/MockPostsRepository';

let mockPostsRepository: MockPostsRepository;
let mockUsersRepository: MockUsersRepository;
let updatePost: UpdatePostUseCase;
let user: User;

describe('UpdatePost', () => {
  beforeEach(async () => {
    mockPostsRepository = new MockPostsRepository();
    mockUsersRepository = new MockUsersRepository();

    updatePost = new UpdatePostUseCase(mockPostsRepository);

    user = await mockUsersRepository.create({
      displayName: 'Lucas Reis',
      email: 'lucas@gmail.com',
      password: '123456',
      image: 'https://cdn.fakercloud.com/avatars/nyancecom_128.jpg',
    });
  });

  it('should be able to update a post', async () => {
    const { id: userId } = user;
    const post = await mockPostsRepository.create({
      title: 'Post do Ano',
      content: 'Melhor post do ano',
      userId,
    });

    const response = await updatePost.execute({
      id: post.id,
      title: 'Post do Ano atualizado',
      content: 'Melhor post do ano atualizado',
      userId,
    });

    expect(response.title).toBe('Post do Ano atualizado');
    expect(response.content).toBe('Melhor post do ano atualizado');
    expect(response.id).toBe(post.id);
  });

  it('should not be able to update a non existing post', async () => {
    const { id: userId } = user;

    await expect(
      updatePost.execute({
        id: faker.datatype.number(),
        title: 'Post do Ano atualizado',
        content: 'Melhor post do ano atualizado',
        userId,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to update a post created by another user', async () => {
    const { id: userId } = user;
    const post = await mockPostsRepository.create({
      title: 'Post do Ano',
      content: 'Melhor post do ano',
      userId,
    });

    await expect(
      updatePost.execute({
        id: post.id,
        title: 'Post do Ano atualizado',
        content: 'Melhor post do ano atualizado',
        userId: faker.datatype.number(),
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
