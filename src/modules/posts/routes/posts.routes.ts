import { celebrate } from 'celebrate';
import { Router } from 'express';
import ensureAutheticated from 'presentation/middlewares/ensureAuthenticated';

import CreatePostControllerFactory from '../useCases/CreatePost';
import createPostValidation from '../useCases/CreatePost/CreatePostValidation';
import GetPostControllerFactory from '../useCases/GetPost';
import ListPostsControllerFactory from '../useCases/ListPosts';

const postsRouter = Router();
const createPostController = CreatePostControllerFactory();
const listPostsController = ListPostsControllerFactory();
const getPostsController = GetPostControllerFactory();

postsRouter.get(
  '/',
  ensureAutheticated,
  listPostsController.handle.bind(listPostsController),
);

postsRouter.get(
  '/:id',
  ensureAutheticated,
  getPostsController.handle.bind(getPostsController),
);

postsRouter.post(
  '/',
  ensureAutheticated,
  celebrate(createPostValidation),
  createPostController.handle.bind(createPostController),
);

export default postsRouter;
