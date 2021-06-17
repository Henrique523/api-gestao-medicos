import { TypeOrmModule } from '@nestjs/typeorm'

export default TypeOrmModule.forRoot({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ['../modules/**/infra/typeorm/entities/*.ts'],
  migrations: ['../shared/infra/typeorm/migrations/*.ts'],
  cli: {
    migrationsDir: '../shared/infra/typeorm/migrations',
  },
  synchronize: true,
})
