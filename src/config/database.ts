import { TypeOrmModule } from '@nestjs/typeorm'

export default TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'gestao_vendas',
  password: 'GestaoVendas',
  database: 'gestaoMedicos',
  entities: [],
  synchronize: true,
})
