require('dotenv/config')

const database = {
  development: process.env.DATABASE_NAME,
  test: process.env.DATABASE_NAME_TEST,
  production: process.env.DATABASE_NAME
};

const entities = {
  development: './src/modules/**/entities/*.ts',
  test: './src/modules/**/entities/*.ts',
  production: './dist/modules/**/entities/*.js'
}

const migrations = {
  development: './src/infra/typeorm/migrations/*.ts',
  test: './src/infra/typeorm/migrations/*.ts',
  production: './dist/infra/typeorm/migrations/*.js'
}

const migrationsDir = {
  development: './src/infra/typeorm/migrations',
  test: './src/infra/typeorm/migrations',
  production: './dist/infra/typeorm/migrations'
}

module.exports = {
  name: 'default',
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: database[process.env.NODE_ENV] || process.env.DATABASE_NAME,
  entities: '{src, dist}/modules/**/entities/*{.ts,.js}',
  synchronize: true,
  migrations: migrations[process.env.NODE_ENV],
  cli: {
    migrationsDir: migrationsDir[process.env.NODE_ENV]
  },
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false
    }
  }
}