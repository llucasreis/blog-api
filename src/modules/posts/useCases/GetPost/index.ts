import PostsRepositoryFactory from '@main/factories/repositories/PostsRepositoryFactory';

import GetPostController from './GetPostController';
import GetPostUseCase from './GetPostUseCase';

export default function GetPostControllerFactory(): GetPostController {
  const postsRepository = PostsRepositoryFactory();
  const getPostUseCase = new GetPostUseCase(postsRepository);
  const getPostController = new GetPostController(getPostUseCase);

  return getPostController;
}
