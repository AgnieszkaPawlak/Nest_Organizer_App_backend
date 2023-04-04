import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterUserResponse, UpdateUserResponse } from 'src/interfaces/interfacesResp';
import { Repository } from 'typeorm';
import { User } from './../typeorm/entities/User';
import { Event } from './../typeorm/entities/Event';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Event) private eventRepository: Repository<Event>
  ) {}

  findUsers() {
    return this.userRepository.find();
  }

  findUser(id: string) {
    const users = this.userRepository.findOneBy({ id });
    return { users };
    // return this.userRepository.findOneBy({ id });
  }

  addUser(userDetails: RegisterUserResponse) {
    const newUser = this.userRepository.create(userDetails);
    return this.userRepository.save(newUser);
  }

  updateUser(id: string, updateUserDetails: UpdateUserResponse) {
    return this.userRepository.update({ id }, { ...updateUserDetails });
  }

  deleteUser(id: string) {
    return this.userRepository.delete(id);
  }
}
