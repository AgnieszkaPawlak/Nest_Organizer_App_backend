import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { CreateEventResponse, UpdateEventResponse } from 'src/interfaces/interfacesResp';
import { Event } from 'src/typeorm/entities/Event';

@Injectable()
export class EventService {
  constructor(@InjectRepository(Event) private eventRepository: Repository<Event>) {}

  create(createEvent: CreateEventResponse) {
    const newTodo = this.eventRepository.create({ ...createEvent, createDate: new Date() });
    return this.eventRepository.save(newTodo);
  }

  findAll() {
    return this.eventRepository.find();
  }

  findOne(id: string) {
    const event = this.eventRepository.findOneBy({ id });
    return event;
  }

  update(id: string, updateEvent: UpdateEventResponse) {
    return this.eventRepository.update({ id }, { ...updateEvent });
  }

  remove(id: string) {
    return this.eventRepository.delete(id);
  }
}
