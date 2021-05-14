import { celebrate } from 'celebrate';
import { Router } from 'express';
import ensureAutheticated from 'presentation/middlewares/ensureAuthenticated';

import CreateUserControllerFactory from '../useCases/CreateUser';
import createUserValidation from '../useCases/CreateUser/CreateUserValidation';
import DeleteUserControllerFactory from '../useCases/DeleteUser';
import GetUserControllerFactory from '../useCases/GetUser';
import ListUsersControllerFactory from '../useCases/ListUsers';

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
