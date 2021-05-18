import { createConnection } from 'typeorm';

import envConfig from './config/env';

createConnection().then(async () => {
  const app = (await import('./config/app')).default;
  app.listen(envConfig.port || 3333, () =>
    console.log('Server and database connected!'),
  );
});
