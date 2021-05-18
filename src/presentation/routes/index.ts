import sessionsRouter from '@modules/accounts/routes/sessions.routes';
import postsRouter from '@modules/posts/routes/posts.routes';
import { Router } from 'express';

import usersRouter from '../../modules/accounts/routes/users.routes';

const router = Router();

router.get('/', (request, response) => {
  response.status(200).json({ message: 'Welcome to BlogAPI!' });
});

router.use('/user', usersRouter);
router.use(sessionsRouter);
router.use('/post', postsRouter);

export default router;
