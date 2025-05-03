import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { Users } from './entities/user.entity';
import { UsersService } from './users.service';
import { UserRepository } from './repository/user.repository';
import { AuthService } from '../auth/auth.service';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  controllers: [UsersController],
  providers: [UsersService, UserRepository, AuthService],
  exports: [UsersService],
})
export class UsersModule {}
