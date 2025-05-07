import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';
import { Users } from './entities/user.entity';

@Controller('api')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('/auth/register')
  @HttpCode(201)
  async register(@Body() user: UserDto): Promise<Users | void> {
    try {
      return await this.userService.register(user);
    } catch (error) {
      if (error) {
        throw new HttpException(
          'user with this email already exists',
          HttpStatus.CONFLICT,
        );
      }
    }
  }

  @Get('/auth/findAll')
  findAll(): Promise<UserDto[]> {
    return this.userService.findAll();
  }
}
