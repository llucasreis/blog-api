import { celebrate } from 'celebrate';
import { Router } from 'express';
import ensureAutheticated from 'presentation/middlewares/ensureAuthenticated';

import CreatePostControllerFactory from '../useCases/CreatePost';
import createPostValidation from '../useCases/CreatePost/CreatePostValidation';

const postsRouter = Router();
const createPostController = CreatePostControllerFactory();

postsRouter.post(
  '/',
  ensureAutheticated,
  celebrate(createPostValidation),
  createPostController.handle.bind(createPostController),
);

export default postsRouter;
