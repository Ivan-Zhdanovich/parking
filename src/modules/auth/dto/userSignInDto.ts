import { IsNotEmpty, IsString, MinLength } from '@nestjs/class-validator';

export class UserSignInDto {
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;
}
