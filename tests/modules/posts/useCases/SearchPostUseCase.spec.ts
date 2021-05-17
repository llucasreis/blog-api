import User from '@modules/accounts/entities/User';
import Post from '@modules/posts/entities/Post';
import SearchPostUseCase from '@modules/posts/useCases/SearchPost/SearchPostUseCase';
import MockUsersRepository from '@tests/modules/accounts/repositories/mocks/MockUsersRepository';

import MockPostsRepository from '../repositories/mocks/MockPostsRepository';

let mockPostsRepository: MockPostsRepository;
let mockUsersRepository: MockUsersRepository;
let searchPost: SearchPostUseCase;
let user: User;
let post1: Post;
let post2: Post;

describe('SearchPost', () => {
  beforeEach(async () => {
    mockPostsRepository = new MockPostsRepository();
    mockUsersRepository = new MockUsersRepository();

    searchPost = new SearchPostUseCase(mockPostsRepository);

    user = await mockUsersRepository.create({
      displayName: 'Lucas Reis',
      email: 'lucas@gmail.com',
      password: '123456',
      image: 'https://cdn.fakercloud.com/avatars/nyancecom_128.jpg',
    });

    const { id: userId } = user;

    post1 = await mockPostsRepository.create({
      title: 'Post do Ano',
      content: 'Melhor post do ano',
      userId,
    });

    post2 = await mockPostsRepository.create({
      title: 'Vamos que Vamos',
      content: 'Foguete não tem ré',
      userId,
    });
  });

  it('should be able to search posts with empty search term', async () => {
    const response = await searchPost.execute('');

    expect(response).toEqual([post1, post2]);
  });

  it('should be able to search posts with search term (case insensitive) for title field', async () => {
    const response = await searchPost.execute('vamos que vamos');

    expect(response).toEqual([post2]);
  });

  it('should be able to search posts with search term (case insensitive) for content field', async () => {
    const response = await searchPost.execute('foguete não tem ré');

    expect(response).toEqual([post2]);
  });

  it('should be able to search posts and return an empty array if no post was matched', async () => {
    const response = await searchPost.execute('string inexistente');

    expect(response).toEqual([]);
  });
});
