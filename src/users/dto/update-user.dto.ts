import { IsString, IsNotEmpty, IsEmail } from 'class-validator';
export class UpdateUserDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}
