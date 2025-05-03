import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Reservations } from '../entities/reservation.entity';

@Injectable()
export class ReservationRepository extends Repository<Reservations> {
  constructor(private dataSource: DataSource) {
    super(Reservations, dataSource.createEntityManager());
  }
}
