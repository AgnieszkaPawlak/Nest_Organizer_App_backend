import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { Event } from 'src/typeorm/entities/Event';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Event])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
