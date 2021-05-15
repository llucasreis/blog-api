import { celebrate } from 'celebrate';
import { Router } from 'express';
import ensureAutheticated from 'presentation/middlewares/ensureAuthenticated';

import CreatePostControllerFactory from '../useCases/CreatePost';
import createPostValidation from '../useCases/CreatePost/CreatePostValidation';
import DeletePostControllerFactory from '../useCases/DeletePost';
import GetPostControllerFactory from '../useCases/GetPost';
import ListPostsControllerFactory from '../useCases/ListPosts';
import SearchPostControllerFactory from '../useCases/SearchPost';
import UpdatePostControllerFactory from '../useCases/UpdatePost';
import updatePostValidation from '../useCases/UpdatePost/UpdatePostValidation';

const postsRouter = Router();
const createPostController = CreatePostControllerFactory();
const listPostsController = ListPostsControllerFactory();
const getPostsController = GetPostControllerFactory();
const updatePostController = UpdatePostControllerFactory();
const deletePostController = DeletePostControllerFactory();
const searchPostController = SearchPostControllerFactory();

postsRouter.get(
  '/',
  ensureAutheticated,
  listPostsController.handle.bind(listPostsController),
);

postsRouter.get(
  '/search',
  ensureAutheticated,
  searchPostController.handle.bind(searchPostController),
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

postsRouter.put(
  '/:id',
  ensureAutheticated,
  celebrate(updatePostValidation),
  updatePostController.handle.bind(updatePostController),
);

postsRouter.delete(
  '/:id',
  ensureAutheticated,
  deletePostController.handle.bind(deletePostController),
);

export default postsRouter;
