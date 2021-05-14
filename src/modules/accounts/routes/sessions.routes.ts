import { celebrate } from 'celebrate';
import { Router } from 'express';

import AuthenticateUserControllerFactory from '../useCases/AuthenticateUser';
import authenticateUserValidation from '../useCases/AuthenticateUser/AuthenticateUserValidation';

const sessionsRouter = Router();
const authenticateUserController = AuthenticateUserControllerFactory();

sessionsRouter.post(
  '/login',
  celebrate(authenticateUserValidation),
  authenticateUserController.handle.bind(authenticateUserController),
);

export default sessionsRouter;
