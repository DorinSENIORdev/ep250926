import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsNumber, IsString, Length, Min } from 'class-validator';

export class CreateEmployeeDto {
  @ApiProperty({ example: '2001001234567' })
  @IsString()
  @IsNotEmpty()
  @Length(13, 13)
  idnp: string;

  @ApiProperty({ example: 'Ion Popescu' })
  @IsString()
  @IsNotEmpty()
  @Length(1, 150)
  name: string;

  @ApiProperty({ example: 12500.5, type: Number })
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  salary: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  @Min(1)
  companyId: number;
}
