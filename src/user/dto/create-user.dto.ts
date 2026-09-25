import { IsEmail, IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  name: string;

  @IsEmail()
  @IsNotEmpty()
  @Length(5, 200)
  email: string;

  @IsOptional()
  @IsString()
  readonly extra?: string;
}
