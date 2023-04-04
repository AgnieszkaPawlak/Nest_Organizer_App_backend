import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTodoResponse, UpdateTodoResponse } from 'src/interfaces/interfacesResp';

import { Todo } from './../typeorm/entities/Todo';

@Injectable()
export class TodoService {
  constructor(@InjectRepository(Todo) private todoRepository: Repository<Todo>) {}

  create(createTodo: CreateTodoResponse) {
    const newTodo = this.todoRepository.create(createTodo);
    return this.todoRepository.save(newTodo);
  }

  findAll() {
    return this.todoRepository.find();
  }

  findOne(id: string) {
    const todo = this.todoRepository.findOneBy({ id });
    return todo;
  }

  update(id: string, updateTodo: UpdateTodoResponse) {
    return this.todoRepository.update({ id }, { ...updateTodo });
  }

  async remove(id: string) {
    const deletedTodo = await this.todoRepository.delete(id);
    return deletedTodo;
  }
}
