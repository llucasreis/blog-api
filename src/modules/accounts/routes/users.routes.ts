import { Router } from 'express';
import CreateUserControllerFactory from 'main/factories/controllers/CreateUserControllerFactory';

const usersRouter = Router();
const createUserController = CreateUserControllerFactory();

usersRouter.post('/', createUserController.handle.bind(createUserController));

export default usersRouter;
