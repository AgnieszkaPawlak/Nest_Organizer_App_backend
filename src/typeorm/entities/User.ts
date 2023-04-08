import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Event } from './Event';
import { Todo } from './Todo';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  @Column()
  email: string;

  @OneToMany(() => Event, (event) => event.user)
  events: Event[];

  @OneToMany(() => Todo, (todo) => todo.user)
  todos: Todo[];
}
