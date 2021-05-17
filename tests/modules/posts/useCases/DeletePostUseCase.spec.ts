import User from '@modules/accounts/entities/User';
import DeletePostUseCase from '@modules/posts/useCases/DeletePost/DeletePostUseCase';
import AppError from '@presentation/errors/AppError';
import MockUsersRepository from '@tests/modules/accounts/repositories/mocks/MockUsersRepository';
import faker from 'faker';

import MockPostsRepository from '../repositories/mocks/MockPostsRepository';

let mockPostsRepository: MockPostsRepository;
let mockUsersRepository: MockUsersRepository;
let deletePost: DeletePostUseCase;
let user: User;

describe('DeletePost', () => {
  beforeEach(async () => {
    mockPostsRepository = new MockPostsRepository();
    mockUsersRepository = new MockUsersRepository();

    deletePost = new DeletePostUseCase(mockPostsRepository);

    user = await mockUsersRepository.create({
      displayName: 'Lucas Reis',
      email: 'lucas@gmail.com',
      password: '123456',
      image: 'https://cdn.fakercloud.com/avatars/nyancecom_128.jpg',
    });
  });

  it('should be able to delete a post', async () => {
    const { id: userId } = user;

    const post = await mockPostsRepository.create({
      title: 'Post do Ano',
      content: 'Melhor post',
      userId,
    });

    await deletePost.execute({ id: post.id, userId });

    const posts = await mockPostsRepository.findAll();

    expect(posts).toEqual([]);
  });

  it('should not be able to delete a non existing post', async () => {
    const { id: userId } = user;

    await expect(
      deletePost.execute({ id: faker.datatype.number(), userId }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to delete a post created by another user', async () => {
    const { id: userId } = user;

    const post = await mockPostsRepository.create({
      title: 'Post do Ano',
      content: 'Melhor post',
      userId,
    });

    await expect(
      deletePost.execute({ id: post.id, userId: faker.datatype.number() }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
