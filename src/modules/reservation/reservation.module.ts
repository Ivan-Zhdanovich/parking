import { Module } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { ReservationController } from './reservation.controller';
import { Reservations } from './entities/reservation.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservationRepository } from './repositories/reservation.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Reservations])],
  providers: [ReservationService, ReservationRepository],
  controllers: [ReservationController],
})
export class ReservationModule {}
