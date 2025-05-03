import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';

@Controller('api')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('/auth/register')
  @HttpCode(201)
  register(@Body() user: UserDto): Promise<UserDto> {
    return this.userService.register(user);
  }

  @Get('/auth/findAll')
  findAll(): Promise<UserDto[]> {
    return this.userService.findAll();
  }
}
