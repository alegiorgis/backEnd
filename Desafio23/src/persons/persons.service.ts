import { Injectable } from '@nestjs/common';
import { Person } from '../interfaces/person.interface';

@Injectable()
export class PersonsService {
  private readonly persons: Person[] = [];

  async create(person: Person) {
    await this.persons.push(person);
  }

  async findAll(): Promise<Person[]> {
    return await this.persons;
  }
}
