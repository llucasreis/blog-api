import app from '@main/config/app';
import User from '@modules/accounts/entities/User';
import request from 'supertest';
import { Connection, createConnection } from 'typeorm';

let connection: Connection;

describe('CreateUser', () => {
  beforeAll(async () => {
    console.log(process.env.NODE_ENV);
    connection = await createConnection();
    console.log(connection);
    console.log('CONNECTION CREATED');
  });

  afterAll(async () => {
    await connection.close();
    console.log('closed');
  });

  beforeEach(() => {
    connection.getRepository(User).createQueryBuilder().softDelete();
  });

  it('should return 201 on create user successfully', async () => {
    console.log('Testeeeeee');
    createConnection().then(async () => {
      await request(app).get('/user');
    });

    // await request(app)
    //   .post('/user')
    //   .send({
    //     displayName: 'Lucas Reis',
    //     email: 'lucas@gmail.com',
    //     password: '123456',
    //     image: 'https://cdn.fakercloud.com/avatars/nyancecom_128.jpg',
    //   })
    //   .expect(201);
  });
});
