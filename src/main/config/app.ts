import express from 'express';
import validateErrors from 'presentation/middlewares/validateErrors';

import router from '../../presentation/routes';

const app = express();

app.use(express.json());
app.use(router);
app.use(validateErrors);

export default app;
