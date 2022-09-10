import { Body, Controller, Get, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiParam,
  ApiQuery,
} from '@nestjs/swagger';
import { Person } from '../interfaces/person.interface';
import { CreatePersonDto } from '../dto/create-person.dto';
import { PersonsService } from './persons.service';

@Controller('persons')
export class PersonsController {
  constructor(private readonly personsService: PersonsService) {}

  @Post()
  async create(@Body() createPersonDto: CreatePersonDto) {
    await this.personsService.create(createPersonDto);
  }

  @Get()
  @ApiParam({ name: 'nombre', type: 'string', required: true })
  @ApiQuery({ name: 'edad', type: 'number' })
  @ApiOkResponse({
    description: 'Get persons ok',
    type: CreatePersonDto,
  })
  @ApiBadRequestResponse({
    description: 'Get persons bad request',
  })
  @ApiNotFoundResponse({
    description: 'Get persons not found',
  })
  async findAll(): Promise<Person[]> {
    return await this.personsService.findAll();
  }
}
