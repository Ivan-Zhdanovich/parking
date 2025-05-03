import {
  IsBoolean,
  IsNotEmpty,
  IsString,
  MinLength,
} from '@nestjs/class-validator';

export class UserDto {
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsBoolean()
  isActive: boolean;
}
