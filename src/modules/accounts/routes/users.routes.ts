import { celebrate } from 'celebrate';
import { Router } from 'express';
import CreateUserControllerFactory from 'main/factories/controllers/CreateUserControllerFactory';

import createUserValidation from '../useCases/CreateUser/CreateUserValidation';

const usersRouter = Router();
const createUserController = CreateUserControllerFactory();

usersRouter.post(
  '/',
  celebrate(createUserValidation),
  createUserController.handle.bind(createUserController),
);

export default usersRouter;
