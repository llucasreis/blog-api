import PostsRepositoryFactory from '@main/factories/repositories/PostsRepositoryFactory';

import ListPostsController from './ListPostsController';
import ListPostsUseCase from './ListPostsUseCase';

export default function ListPostsControllerFactory(): ListPostsController {
  const postsRepository = PostsRepositoryFactory();
  const listPostsUseCase = new ListPostsUseCase(postsRepository);
  const listPostsController = new ListPostsController(listPostsUseCase);

  return listPostsController;
}
