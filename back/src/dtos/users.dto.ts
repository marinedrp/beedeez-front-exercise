import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail({}, { message: 'Please enter a valid email.' })
  public email: string;

  @IsString()
  public password: string;
}
