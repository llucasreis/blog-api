import PostsRepositoryFactory from '@main/factories/repositories/PostsRepositoryFactory';

import UpdatePostController from './UpdatePostController';
import UpdatePostUseCase from './UpdatePostUseCase';

export default function UpdatePostControllerFactory(): UpdatePostController {
  const postsRepository = PostsRepositoryFactory();
  const updatePostUseCase = new UpdatePostUseCase(postsRepository);
  const updatePostController = new UpdatePostController(updatePostUseCase);

  return updatePostController;
}
