import { TypeOrmModuleOptions } from '@nestjs/typeorm';

import { User } from '../typeorm/entities/User';
import { Event } from '../typeorm/entities/Event';
import { Todo } from '../typeorm/entities/Todo';

export default (): TypeOrmModuleOptions => ({
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: +process.env.DB_PORT,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  autoLoadEntities: true,
  synchronize: true,
  entities: [User, Event, Todo],
});
