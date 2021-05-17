require('dotenv/config')

const database = {
  development: process.env.DATABASE_NAME_DEV,
  test: process.env.DATABASE_NAME_TEST
};

module.exports = {
  name: 'default',
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: database[process.env.NODE_ENV],
  entities: ['./src/modules/**/entities/*.ts'],
  synchronize: true,
  migrations: ['./src/infra/typeorm/migrations/*.ts'],
  cli: {
    migrationsDir: './src/infra/typeorm/migrations'
  }
}