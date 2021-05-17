import User from '@modules/accounts/entities/User';
import ListPostsUseCase from '@modules/posts/useCases/ListPosts/ListPostsUseCase';
import MockUsersRepository from '@tests/modules/accounts/repositories/mocks/MockUsersRepository';

import MockPostsRepository from '../repositories/mocks/MockPostsRepository';

let mockPostsRepository: MockPostsRepository;
let mockUsersRepository: MockUsersRepository;
let listPosts: ListPostsUseCase;
let user: User;

describe('ListPosts', () => {
  beforeEach(async () => {
    mockPostsRepository = new MockPostsRepository();
    mockUsersRepository = new MockUsersRepository();

    listPosts = new ListPostsUseCase(mockPostsRepository);

    user = await mockUsersRepository.create({
      displayName: 'Lucas Reis',
      email: 'lucas@gmail.com',
      password: '123456',
      image: 'https://cdn.fakercloud.com/avatars/nyancecom_128.jpg',
    });
  });

  it('should be able to list the posts', async () => {
    const { id: userId } = user;

    const post1 = await mockPostsRepository.create({
      title: 'Post do Ano',
      content: 'Melhor conteúdo do ano',
      userId,
    });

    const post2 = await mockPostsRepository.create({
      title: 'Post do Ano 2',
      content: 'Melhor conteúdo do ano 2',
      userId,
    });

    const post3 = await mockPostsRepository.create({
      title: 'Post do Ano 3',
      content: 'Melhor conteúdo do ano 3',
      userId,
    });

    const posts = await listPosts.execute();

    expect(posts).toEqual([post1, post2, post3]);
  });
});
