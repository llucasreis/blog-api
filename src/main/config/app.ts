import validateErrors from '@presentation/middlewares/validateErrors';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';

import router from '../../presentation/routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(router);
app.use(validateErrors);

export default app;
