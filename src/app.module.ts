import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import TypeOrmConnection from '@config/ormconfig'

@Module({
  imports: [TypeOrmConnection],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
