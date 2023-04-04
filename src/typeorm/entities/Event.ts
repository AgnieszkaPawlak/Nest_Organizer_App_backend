import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';

@Entity({ name: 'events' })
export class Event {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  createDate: Date;

  @Column({ type: 'timestamp' })
  startDate: Date | null;

  @Column({ type: 'timestamp' })
  endDate: Date | null;

  @Column({ nullable: true })
  colorEvent?: string;

  @ManyToOne(() => User, (user) => user.events)
  user: User;
}
