import PostsRepositoryFactory from '@main/factories/repositories/PostsRepositoryFactory';

import CreatePostController from './CreatePostController';
import CreatePostUseCase from './CreatePostUseCase';

export default function CreatePostControllerFactory(): CreatePostController {
  const postsRepository = PostsRepositoryFactory();
  const createPostUseCase = new CreatePostUseCase(postsRepository);
  const createPostController = new CreatePostController(createPostUseCase);

  return createPostController;
}
