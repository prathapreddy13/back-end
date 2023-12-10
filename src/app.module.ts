import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import { UsersController } from './users/users/users.controller';
import { UsersModule } from './users/users/users.module';

@Module({
  imports: [
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'rain.db.elephantsql.com',
    port: 5432,
    username: 'ejrxfxwu',
    password: '7mJWWscn2l3RjmmQZQrEokkBKj8Giy8W',
    database: 'ejrxfxwu',
    entities: [],
    synchronize: true,
  }),
  UsersModule,
],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule {}
