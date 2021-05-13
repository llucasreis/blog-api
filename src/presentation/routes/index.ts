import { Router } from 'express';

import usersRouter from '../../modules/accounts/routes/users.routes';

const router = Router();

router.use('/users', usersRouter);

export default router;
