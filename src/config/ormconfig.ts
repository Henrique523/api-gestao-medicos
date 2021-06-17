import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm'

export const config: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ['./src/modules/**/infra/typeorm/entities/*.ts'],
  migrations: ['./src/shared/infra/typeorm/migrations/*.ts'],
  cli: {
    migrationsDir: './src/shared/infra/typeorm/migrations',
  },
  synchronize: true,
}

export default TypeOrmModule.forRoot({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ['@modules/**/infra/typeorm/entities/*.ts'],
  migrations: ['@shared/infra/typeorm/migrations/*.ts'],
  cli: {
    migrationsDir: '@shared/infra/typeorm/migrations',
  },
  synchronize: true,
})
