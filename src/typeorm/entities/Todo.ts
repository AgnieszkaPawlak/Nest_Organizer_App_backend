import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { User } from './User';

@Entity({ name: 'todos' })
export class Todo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true, length: '100' })
  title: string;

  @Column({ length: '1000' })
  description: string;

  @Column()
  deadline: Date;

  @ManyToOne(() => User, (user) => user.todos)
  user: User;
}
