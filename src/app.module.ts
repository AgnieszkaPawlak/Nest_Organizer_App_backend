import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/entities/User';
import { Event } from './typeorm/entities/Event';
import { Todo } from './typeorm/entities/Todo';
import { UsersModule } from './users/users.module';

import { AllExceptionsFilter } from './filters/global-exception.filter';
import { TodoModule } from './todo/todo.module';
import { EventModule } from './event/event.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'test',
      password: 'test',
      database: 'test',
      entities: [User, Event, Todo],
      bigNumberStrings: false,
      logging: true,
      synchronize: true,
    }),
    UsersModule,
    TodoModule,
    EventModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule {}
