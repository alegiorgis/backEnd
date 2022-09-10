import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreatePersonDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly nombre: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly apellido: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  readonly edad: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly dni: string;
}
