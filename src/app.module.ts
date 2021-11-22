import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsController } from './app.controller';
import { AppService } from './app.service';
import { User, Zakaz} from './user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 4000,
      username: 'nest',
      password: 'nest',
      database: 'nest',
      entities: [Zakaz, User],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User]),
  ],
  providers: [AppService],
  controllers: [CatsController],
})
export class AppModule {}
