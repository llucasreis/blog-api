require('dotenv/config')

const entities = {
  development: './src/modules/**/entities/*.ts',
  production: './dist/modules/**/entities/*.js'
}

const migrations = {
  development: './src/infra/typeorm/migrations/*.ts',
  production: './dist/infra/typeorm/migrations/*.js'
}

module.exports = {
  name: 'default',
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [entities[process.env.NODE_ENV]],
  synchronize: true,
  migrations: [migrations[process.env.NODE_ENV]],
  cli: {
    migrationsDir: './src/infra/typeorm/migrations',
  },
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false
    }
  }
}