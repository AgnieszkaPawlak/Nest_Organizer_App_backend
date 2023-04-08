import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Todo } from 'src/typeorm/entities/Todo';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
