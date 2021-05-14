import DeleteUserControllerFactory from '@main/factories/controllers/DeleteUserControllerFactory';
import GetUserControllerFactory from '@main/factories/controllers/GetUserControllerFactory';
import ListUsersControllerFactory from '@main/factories/controllers/ListUsersControllerFactory';
import { celebrate } from 'celebrate';
import { Router } from 'express';
import CreateUserControllerFactory from 'main/factories/controllers/CreateUserControllerFactory';
import ensureAutheticated from 'presentation/middlewares/ensureAuthenticated';

import createUserValidation from '../useCases/CreateUser/CreateUserValidation';

const usersRouter = Router();
const createUserController = CreateUserControllerFactory();
const listUsersController = ListUsersControllerFactory();
const getUserController = GetUserControllerFactory();
const deleteUserController = DeleteUserControllerFactory();

usersRouter.get(
  '/',
  ensureAutheticated,
  listUsersController.handle.bind(listUsersController),
);

usersRouter.get(
  '/:id',
  ensureAutheticated,
  getUserController.handle.bind(getUserController),
);

usersRouter.post(
  '/',
  celebrate(createUserValidation),
  createUserController.handle.bind(createUserController),
);

usersRouter.delete(
  '/me',
  ensureAutheticated,
  deleteUserController.handle.bind(deleteUserController),
);

export default usersRouter;
