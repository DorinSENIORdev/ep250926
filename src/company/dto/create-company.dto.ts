import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString, IsUrl, Length, Min } from 'class-validator';

export class CreateCompanyDto {
  @ApiProperty({ example: 'Acme SRL' })
  @IsString()
  @IsNotEmpty()
  @Length(1, 150)
  name: string;

  @ApiProperty({ example: 'https://acme.example.com' })
  @IsUrl()
  @Length(1, 255)
  website: string;

  @ApiProperty({ example: 25 })
  @IsInt()
  @Min(0)
  totalEmployees: number;
}
