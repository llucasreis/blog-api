import PostsRepositoryFactory from '@main/factories/repositories/PostsRepositoryFactory';

import DeletePostController from './DeletePostController';
import DeletePostUseCase from './DeletePostUseCase';

export default function DeletePostControllerFactory(): DeletePostController {
  const postsRepository = PostsRepositoryFactory();
  const deletePostUseCase = new DeletePostUseCase(postsRepository);
  const deletePostController = new DeletePostController(deletePostUseCase);

  return deletePostController;
}
