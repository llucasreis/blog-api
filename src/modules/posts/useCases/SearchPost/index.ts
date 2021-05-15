import PostsRepositoryFactory from '@main/factories/repositories/PostsRepositoryFactory';

import SearchPostController from './SearchPostController';
import SearchPostUseCase from './SearchPostUseCase';

export default function SearchPostControllerFactory(): SearchPostController {
  const postsRepository = PostsRepositoryFactory();
  const searchPostUseCase = new SearchPostUseCase(postsRepository);
  const searchPostController = new SearchPostController(searchPostUseCase);

  return searchPostController;
}
