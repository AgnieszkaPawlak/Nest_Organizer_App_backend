import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { RegisterUserResponse, UpdateUserResponse } from 'src/interfaces/interfacesResp';
import { User } from './../typeorm/entities/User';
import { Event } from './../typeorm/entities/Event';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Event) private eventRepository: Repository<Event>
  ) {}

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: string) {
    const users = this.userRepository.findOneBy({ id });
    return users;
    // return this.userRepository.findOneBy({ id });
  }

  add(userDetails: RegisterUserResponse) {
    const newUser = this.userRepository.create(userDetails);
    return this.userRepository.save(newUser);
  }

  update(id: string, updateUserDetails: UpdateUserResponse) {
    return this.userRepository.update({ id }, { ...updateUserDetails });
  }

  delete(id: string) {
    return this.userRepository.delete(id);
  }
}
