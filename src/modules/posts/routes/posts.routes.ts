import { celebrate } from 'celebrate';
import { Router } from 'express';
import ensureAutheticated from 'presentation/middlewares/ensureAuthenticated';

import CreatePostControllerFactory from '../useCases/CreatePost';
import createPostValidation from '../useCases/CreatePost/CreatePostValidation';
import ListPostsControllerFactory from '../useCases/ListPosts';

const postsRouter = Router();
const createPostController = CreatePostControllerFactory();
const listPostsController = ListPostsControllerFactory();

postsRouter.get(
  '/',
  ensureAutheticated,
  listPostsController.handle.bind(listPostsController),
);

postsRouter.post(
  '/',
  ensureAutheticated,
  celebrate(createPostValidation),
  createPostController.handle.bind(createPostController),
);

export default postsRouter;
